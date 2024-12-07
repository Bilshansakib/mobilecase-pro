import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";

// interface PageProps {
//   searchParams: {
//     [key: string]: string | string[] | undefined;
//   };
// }
type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>
 

const Page = async (props: {
  params: Params
  searchParams: SearchParams
}) => {
  const { id } = await props.searchParams

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });
  console.log(configuration)

  if (!configuration) {
    return notFound();
  }
  return <DesignPreview configuration={configuration} />;
};
export default Page;
