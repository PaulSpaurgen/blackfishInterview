import { Box } from "@chakra-ui/react";

export default function CommonPost(postData) {
  const {
    imgUrl,
    postedBy,
    heading,
    HasTags,
    reactions,
    comments,
    timeDuration,
  } = postData;
   const pos  = {
    name:"",
    isPostedFor: true,
    postedFor: {
        imgUrlCompany:"",
        name: "",
    }
   }
   const hash = [{
    name:"tutorial",
    backend:"hexcode",
   }]
  return (
  <Box>

  </Box>);
}
