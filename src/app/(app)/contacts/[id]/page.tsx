export default function ContactDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-2">
      <h1 className="font-display text-3xl font-semibold">Contact</h1>
      <p className="text-sm text-muted-foreground">Detail page for {params.id} — coming soon.</p>
    </div>
  );
}
