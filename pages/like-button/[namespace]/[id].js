// import { LikeButton } from "@lyket/react";
// import { useRouter } from "next/router";

// export default function Button() {
//   const router = useRouter();
//   const { namespace, id } = router.query;

//   return <LikeButton namespace={namespace} id={id} />;
// }

import { Provider, LikeButton } from "@lyket/react";

<Provider
  apiKey="pt_762578bb9c5fba2e90b9f936e9f8cc"
  theme={{
    colors: {
      background: "#b8fff3",
      text: "violet",
      primary: "rgba(255, 224, 138, 0.4)"
    }
  }}
>
  <LikeButton
    namespace="my-blog-post"
    id="how-to-beat-me-at-chess"
  />
</Provider>
