import { Form } from "../Components"

export const Contact = () => {
  return (
    <main className="py-20 flex flex-col items-center justify-center dark:bg-slate-900 dark:text-white">
      <h2 className="font-bold">Want to know more?</h2>
      <p className="mb-4">Send us your questions and we will contact you</p>
      <div className="">
        <Form/>
      </div>
    </main>
  )
}