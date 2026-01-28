import PageContainer from "@/components/layout/PageContainer";
import PasteViewer from "@/components/paste/PasteViewer";

export default function ViewPastePage() {
  // 🔹 Dummy data for now (will be replaced by API later)
  const mockPaste = {
    content: `This is a sample paste content.

You can paste multiple lines here.
Everything is rendered safely.`,
    remainingViews: 3,
    expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
  };

  return (
    <PageContainer title="View Paste">
      <PasteViewer
        content={mockPaste.content}
        remainingViews={mockPaste.remainingViews}
        expiresAt={mockPaste.expiresAt}
      />
    </PageContainer>
  );
}
