import WeddingInvitation from "../components/WeddingInvitation";
import { getSlideshowImages } from "../lib/slideshowImages";

export default async function Home() {
  const imageSources = await getSlideshowImages();

  return <WeddingInvitation imageSources={imageSources} />;
}
