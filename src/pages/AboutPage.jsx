export default function AboutPage() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-20">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-[60px]  items-start mb-[120px]">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-4">
            Dedicated to Excellence In the Inspection Process
          </h1>
          <div className="">
            <p className="text-gray-600">
              Pall Group Services offers comprehensive expertise of Record (CQV)
              services for life sciences companies from project inception to
              completion. We collaborate closely with owners, designers &
              contractors throughout all stages of construction ensuring that
              inspections are conducted thoroughly and that the project
              progresses on schedule, meeting all required standards for timely
              and successful completion.
            </p>
            <div className="mt-9">
              <h2 className="text-xl md:text-[24px] font-semibold mb-2 text-default">Our Mission:</h2>
              <p className="text-gray-600">
                We are committed to providing high-quality inspection and
                documentation services for your construction and renovation
                project. We take pride in helping you ensure that your project
                is completed and on track.
              </p>
            </div>
          </div>
        </div>
        <div className="order-first md:order-last">
          <img
            src="/images/aboutpic.png"
            alt="Professional in construction site"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Founder Section */}
      <div className="grid md:grid-cols-2  items-start mb-20">
        <div>
          <img
            src="/images/pageabout2.png"
            alt="Founder"
            className="md:w-[80%] w-full"
          />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold mb-6 text-default">
            Founder of Pall Group Services
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="text-gray">
              An active member of multiple professional organizations, Christina
              is affiliated with the International Federation of Professional
              and Technical Engineers and the Gulf Science Society of America,
              further demonstrating her commitment to serving professional
              communities.
            </p>
            <p className="text-gray">
              Outside of her professional life, Christina is a dedicated mother
              who enjoys skiing, hiking, and exploring various outdoor
              activities. Passionate about healthy cooking, she values quality
              time spent with family and friends.
            </p>
            <p className="text-gray">
              Christina Pall brings over 30 years of experience in construction
              management to her role as founder of Pall Group Services,
              established in 2008. She holds a Bachelor of Science degree in
              Architecture from California Polytechnic University at San Luis
              Obispo and completed advanced Master's studies in Civil
              Engineering at California State University Sacramento. As a Woman
              Business Enterprise (WBE), Christina is committed to promoting
              diversity in the industry.
            </p>
            <p className="text-gray">
              Christina's professional qualifications include certifications as
              an A Licensed CSP/PCI Inspector of Record, NTC 6020 Medical Gas
              Inspector, and Asbestos Hazard Emergency Response Act (AHERA)
              Certificate. She is also certified as an OSHA/EPA professional and
              a CPS Lead Inspector/Assessor.
            </p>
          </div>
        </div>
      </div>

      {/* Quality Assurance Section */}
      <div className="grid md:grid-cols-2  items-start">
        <div className="">
          <img
            src="/images/pageabout.png"
            alt="Quality Assurance Specialist"
            className="md:w-[80%] w-full"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-default">
            Quality Assurance & Control Specialist
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="text-gray">
              Miceal Moran brings over 30 years of experience in construction
              and design to the team. A graduate of California Polytechnic State
              University, San Luis Obispo with a background in architecture and
              drafting, Miceal is a seasoned professional with deep industry
              knowledge. As a Quality Assurance and Control Specialist, he
              ensures that projects are executed efficiently, in full compliance
              with regulations, and to the highest standards of quality.
            </p>
            <p className="text-gray">
              Beyond his professional accomplishments, Miceal is a dedicated
              father of four. He is passionate about coaching and mentoring
              youth in sports, and enjoys drawing, painting, and creating
              stylized portrait art. An avid snow skier and musician, Miceal has
              a broad range of personal interests that reflect his commitment to
              both creativity and an active lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
