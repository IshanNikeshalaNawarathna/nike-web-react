// export default function App() {
//   return (
//     <div className="bg-slate-100">
//     <h1 className="text-3xl font-bold underline">
//       Hello world! I'M Ishan Nikeshala Nawarathna
//     </h1>
//     </div>
//   )
// }

import { Hero,CustomerReviews,Footer,PopulerProduct,Services,SpecialOffers,Subscribe,SuperQuality } from "./sections";
import Nav from "./components/Nav";
const App = () => (

  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopulerProduct />
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding-x py-10">
      <Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
    </section>
    <section className="padding bg-pale-blue">
      <CustomerReviews/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="padding-x padding-t bg-black pb-8">
      <Footer/>
    </section>
  </main>

);

export default App;