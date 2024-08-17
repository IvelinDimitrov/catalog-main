import useScrollToTop from "../Handlerrs/useScrollToTop";

export default function Team() {
  useScrollToTop();
  return (
    <section id="our-team" className="bg-background-color py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-tx">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* Team Member 1 */}
          <div className="rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="/images/team/vik.jpg"
              alt="Team Member 1"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">John Doe</h3>
            <p className="text-gray-700">Role: Chief Design</p>
          </div>
          {/* Team Member 2 */}
          <div className="rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="/images/team/zlat.jpg"
              alt="Team Member 2"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-700">Role: Team Lead</p>
          </div>
          {/* Team Member 3 */}
          <div className="rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="/images/team/goshi.jpg"
              alt="Team Member 3"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
            <p className="text-gray-700">Role: Marketing Manager</p>
          </div>
          {/* Team Member 4 */}
          <div className="rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="/images/team/bog.jpg"
              alt="Team Member 4"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Peter Johnson</h3>
            <p className="text-gray-700">Role: Lumber specialist</p>
          </div>
          {/* Team Member 5 */}
          <div className="rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="/images/team/yoli.jpg"
              alt="Team Member 5"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
            <p className="text-gray-700">Role: CEO</p>
          </div>
          {/* Team Member 6 */}
          <div className="rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="/images/team/petra.jpg"
              alt="Team Member 6"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Michael Davis</h3>
            <p className="text-gray-700">Role: Product Distributor</p>
          </div>
          {/* Team Member 7 */}
          <div className="rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="/images/team/iv.jpg"
              alt="Team Member 7"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-gray-700">Role: Content Writer</p>
          </div>
          {/* Team Member 8 */}
          <div className="rounded-lg shadow-md p-6 my-6 text-center">
            <img
              src="/images/team/vit.jpg"
              alt="Team Member 8"
              className="w-full rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
            <p className="text-gray-700">Role: Project Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}
