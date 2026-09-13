export default function AccordionGallery({
  items,
  light = false,
}: {
  items: { name: string; desc: string; image: string }[];
  light?: boolean;
}) {
