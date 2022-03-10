import React from "react";
import Meta from "./../components/Meta";
import LegalSection from "./../components/LegalSection";
import { useRouter } from "./../util/router";

function LegalPage(props) {
  const router = useRouter();

  return (
    <>
      <Meta title="Legal" />
      <LegalSection
        color="white"
        size="normal"
        backgroundImage=""
        backgroundImageOpacity={1}
        section={router.query.section}
        key={router.query.section}
      />
    </>
  );
}

export default LegalPage;
