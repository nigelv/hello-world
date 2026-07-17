import { PrismaClient, ActivityType, WorkspaceRole } from "@prisma/client";
import { hash } from "bcryptjs";
import { DEFAULT_PIPELINE_STAGES } from "../src/lib/constants";

const prisma = new PrismaClient();

const DEFAULT_STAGES = DEFAULT_PIPELINE_STAGES;

const COMPANIES = [
  { name: "Northwind Labs", domain: "northwindlabs.com", industry: "SaaS", size: "11-50" },
  { name: "Harbor Freight Co", domain: "harborfreight.co", industry: "Logistics", size: "51-200" },
  { name: "Brightleaf Health", domain: "brightleaf.health", industry: "Healthcare", size: "11-50" },
  { name: "Cascade Retail", domain: "cascaderetail.com", industry: "Retail", size: "201-500" },
  { name: "Orbit Analytics", domain: "orbitanalytics.io", industry: "Data", size: "1-10" },
  { name: "Summit Legal", domain: "summitlegal.com", industry: "Legal", size: "11-50" },
  { name: "Pinecone Foods", domain: "pineconefoods.com", industry: "CPG", size: "51-200" },
  { name: "Velvet Studios", domain: "velvetstudios.tv", industry: "Media", size: "1-10" },
];

const FIRST_NAMES = [
  "Ava", "Noah", "Mia", "Liam", "Sofia", "Ethan", "Iris", "Owen",
  "Chloe", "Ryan", "Zoe", "Kai", "Emma", "Leo", "Nora", "Jude",
  "Ruby", "Max", "Luna", "Eli", "Grace", "Sam", "Nina", "Ben",
];

const LAST_NAMES = [
  "Chen", "Patel", "Nguyen", "Brooks", "Garcia", "Kim", "Walsh", "Singh",
  "Martinez", "Owens", "Reed", "Torres", "Bailey", "Cruz", "Diaz", "Fox",
];

const TITLES = [
  "CEO", "VP Sales", "Head of Growth", "CTO", "Procurement Lead",
  "Founder", "Marketing Director", "Account Executive", "COO", "Product Lead",
];

const TAG_NAMES = ["hot-lead", "enterprise", "inbound", "partner", "renewal", "churn-risk"];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

function daysFromNow(n: number) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
}

async function main() {
  console.log("Seeding database...");

  await prisma.dealTag.deleteMany();
  await prisma.companyTag.deleteMany();
  await prisma.contactTag.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.note.deleteMany();
  await prisma.activity.deleteMany();
  await prisma.deal.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.company.deleteMany();
  await prisma.pipelineStage.deleteMany();
  await prisma.workspaceInvite.deleteMany();
  await prisma.workspaceMember.deleteMany();
  await prisma.workspace.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await hash("password123", 10);

  const admin = await prisma.user.create({
    data: {
      name: "Alex Founder",
      email: "alex@acme.crm",
      passwordHash,
    },
  });

  const member = await prisma.user.create({
    data: {
      name: "Sam Seller",
      email: "sam@acme.crm",
      passwordHash,
    },
  });

  const workspace = await prisma.workspace.create({
    data: {
      name: "Acme CRM",
      slug: "acme",
      members: {
        create: [
          { userId: admin.id, role: WorkspaceRole.ADMIN },
          { userId: member.id, role: WorkspaceRole.MEMBER },
        ],
      },
      stages: {
        create: DEFAULT_STAGES.map((stage) => ({ ...stage })),
      },
    },
    include: { stages: { orderBy: { position: "asc" } } },
  });

  const tags = await Promise.all(
    TAG_NAMES.map((name, i) =>
      prisma.tag.create({
        data: {
          name,
          color: ["#ef4444", "#f59e0b", "#22c55e", "#3b82f6", "#8b5cf6", "#ec4899"][i],
          workspaceId: workspace.id,
        },
      })
    )
  );

  const companies = await Promise.all(
    COMPANIES.map((c) =>
      prisma.company.create({
        data: {
          ...c,
          workspaceId: workspace.id,
          createdById: admin.id,
        },
      })
    )
  );

  const contacts = [];
  for (let i = 0; i < 24; i++) {
    const first = FIRST_NAMES[i % FIRST_NAMES.length]!;
    const last = LAST_NAMES[i % LAST_NAMES.length]!;
    const company = companies[i % companies.length]!;
    const contact = await prisma.contact.create({
      data: {
        name: `${first} ${last}`,
        email: `${first.toLowerCase()}.${last.toLowerCase()}@${company.domain}`,
        phone: `+1-555-${String(1000 + i).padStart(4, "0")}`,
        title: TITLES[i % TITLES.length],
        workspaceId: workspace.id,
        companyId: company.id,
        ownerId: i % 3 === 0 ? member.id : admin.id,
        createdById: admin.id,
        tags: {
          create: [{ tagId: pick(tags).id }],
        },
      },
    });
    contacts.push(contact);
  }

  const openStages = workspace.stages.filter((s) => !s.isWon && !s.isLost);
  const wonStage = workspace.stages.find((s) => s.isWon)!;
  const lostStage = workspace.stages.find((s) => s.isLost)!;

  const dealSpecs = [
    { title: "Northwind annual plan", value: 48000, stage: openStages[0], days: 45 },
    { title: "Harbor freight pilot", value: 12000, stage: openStages[1], days: 20 },
    { title: "Brightleaf EHR rollout", value: 95000, stage: openStages[2], days: 60 },
    { title: "Cascade POS upgrade", value: 34000, stage: openStages[2], days: 30 },
    { title: "Orbit analytics seat expansion", value: 18000, stage: openStages[3], days: 12 },
    { title: "Summit Legal retainer", value: 22000, stage: openStages[1], days: 25 },
    { title: "Pinecone wholesale portal", value: 41000, stage: openStages[0], days: 50 },
    { title: "Velvet Studios production suite", value: 15000, stage: openStages[3], days: 8 },
    { title: "Northwind add-on seats", value: 8000, stage: wonStage, days: -10 },
    { title: "Harbor freight trial", value: 5000, stage: lostStage, days: -20 },
    { title: "Cascade regional rollout", value: 72000, stage: openStages[1], days: 40 },
    { title: "Orbit enterprise tier", value: 110000, stage: openStages[2], days: 55 },
  ];

  const deals = [];
  for (let i = 0; i < dealSpecs.length; i++) {
    const spec = dealSpecs[i]!;
    const contact = contacts[i % contacts.length]!;
    const deal = await prisma.deal.create({
      data: {
        title: spec.title,
        value: spec.value,
        probability: spec.stage.isWon ? 100 : spec.stage.isLost ? 0 : 20 + spec.stage.position * 20,
        expectedCloseDate: daysFromNow(spec.days),
        workspaceId: workspace.id,
        stageId: spec.stage.id,
        contactId: contact.id,
        companyId: contact.companyId,
        ownerId: i % 2 === 0 ? admin.id : member.id,
        createdById: admin.id,
        tags: {
          create: [{ tagId: pick(tags).id }],
        },
      },
    });
    deals.push(deal);
  }

  for (let i = 0; i < 18; i++) {
    const contact = contacts[i % contacts.length]!;
    const deal = deals[i % deals.length]!;
    await prisma.activity.create({
      data: {
        type: pick([
          ActivityType.CALL,
          ActivityType.EMAIL,
          ActivityType.MEETING,
          ActivityType.TASK,
        ]),
        title: pick([
          "Follow up on proposal",
          "Schedule demo",
          "Send pricing sheet",
          "Discovery call",
          "Contract review",
          "Check-in email",
        ]),
        description: "Seeded activity for local testing.",
        dueDate: daysFromNow(pick([-3, -1, 0, 1, 2, 5, 10])),
        completed: i % 4 === 0,
        completedAt: i % 4 === 0 ? daysFromNow(-1) : null,
        workspaceId: workspace.id,
        contactId: contact.id,
        dealId: deal.id,
        assigneeId: i % 2 === 0 ? admin.id : member.id,
        createdById: admin.id,
      },
    });
  }

  for (let i = 0; i < 15; i++) {
    const contact = contacts[i % contacts.length]!;
    await prisma.note.create({
      data: {
        body: pick([
          "Interested in annual billing if we can include onboarding support.",
          "Decision maker is traveling next week — follow up after the 22nd.",
          "Competitive eval against two other vendors. Emphasize speed to value.",
          "Warm intro from existing customer. High intent.",
          "Needs SOC2 packet before security review.",
        ]),
        workspaceId: workspace.id,
        contactId: contact.id,
        dealId: i % 2 === 0 ? deals[i % deals.length]!.id : null,
        authorId: i % 2 === 0 ? admin.id : member.id,
      },
    });
  }

  console.log("Seed complete.");
  console.log(`  Workspace: ${workspace.name} (${workspace.slug})`);
  console.log(`  Users: alex@acme.crm / sam@acme.crm (password: password123)`);
  console.log(`  Contacts: ${contacts.length}, Deals: ${deals.length}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
