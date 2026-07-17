import { Button } from "@/components/ui/button";

export default function ContactsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">Contacts</h1>
          <p className="text-sm text-muted-foreground">
            Sortable list and quick-add land in the next vertical slice.
          </p>
        </div>
        <Button disabled>New contact (n)</Button>
      </div>
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-border bg-card/40 px-6 py-16 text-center">
        <p className="text-sm text-muted-foreground">
          No contacts yet — add someone with a name and email.
        </p>
        <Button className="mt-4" disabled>
          Add your first contact
        </Button>
      </div>
    </div>
  );
}
