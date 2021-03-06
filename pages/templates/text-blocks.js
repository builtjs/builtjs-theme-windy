import TemplatesLayout from "../../components/layouts/templates-layout";
import TextBlock1 from "../../components/theme/text-blocks/text-block-1";
import TextBlock2 from "../../components/theme/text-blocks/text-block-2";
import TextBlock3 from "../../components/theme/text-blocks/text-block-3";
import TextBlock4 from "../../components/theme/text-blocks/text-block-4";
import TextBlock5 from "../../components/theme/text-blocks/text-block-5";

export default function IndexPage() {
  return (
    <TemplatesLayout>
      <TextBlock1 />
      <div className="p-8 bg-gray-800"></div>
      <TextBlock2 />
      <div className="p-8 bg-gray-800"></div>
      <TextBlock3 />
      <div className="p-8 bg-gray-800"></div>
      <TextBlock4 />
      <div className="p-8 bg-gray-800"></div>
      <TextBlock5 />
    </TemplatesLayout>
  );
}
