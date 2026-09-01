import WeddingInvitation from "../../components/WeddingInvitation";
import { getSlideshowImages } from "../../lib/slideshowImages";

export default async function InvitationCodePage({
  params,
}: {
  params: Promise<{ invitationCode: string }>;
}) {
  const { invitationCode } = await params;
  const imageSources = await getSlideshowImages();

  return (
    <WeddingInvitation
      invitationCode={invitationCode}
      imageSources={imageSources}
    />
  );
}
