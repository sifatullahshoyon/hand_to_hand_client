import Container from "@/components/shared/Container";

const Terms = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-12 my-6 px-4 sm:px-6 lg:px-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
          <p className="text-gray-700">
            Welcome to our platform. These terms and conditions outline the
            rules and regulations for the use of our website. By accessing this
            website we assume you accept these terms and conditions. Do not
            continue to use the site if you do not agree to all the terms and
            conditions stated on this page.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            2. Intellectual Property Rights
          </h2>
          <p className="text-gray-700">
            Other than the content you own, under these terms, we own all the
            intellectual property rights and materials contained in this
            website. You are granted limited license only for purposes of
            viewing the material contained on this website.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Restrictions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Publishing any website material in any other media</li>
            <li>
              Selling, sublicensing and/or otherwise commercializing any website
              material
            </li>
            <li>Publicly performing and/or showing any website material</li>
            <li>
              Using this website in any way that is or may be damaging to this
              website
            </li>
            <li>
              Using this website contrary to applicable laws and regulations
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Your Content</h2>
          <p className="text-gray-700">
            In these website terms and conditions, &quot;Your Content&quot;
            shall mean any audio, video text, images or other material you
            choose to display on this website. By displaying Your Content, you
            grant us a non-exclusive, worldwide irrevocable, sub-licensable
            license to use, reproduce, adapt, publish, translate and distribute
            it in any and all media.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            In no event shall we, nor any of our officers, directors and
            employees, be held liable for anything arising out of or in any way
            connected with your use of this website whether such liability is
            under contract. We shall not be held liable for any indirect,
            consequential or special liability arising out of or in any way
            related to your use of this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            6. Governing Law & Jurisdiction
          </h2>
          <p className="text-gray-700">
            These terms will be governed by and interpreted in accordance with
            the laws of your country, and you submit to the non-exclusive
            jurisdiction of the state and federal courts located in your country
            for the resolution of any disputes.
          </p>
        </section>
      </div>
    </Container>
  );
};

export default Terms;
