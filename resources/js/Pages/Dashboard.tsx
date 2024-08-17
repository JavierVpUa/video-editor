import {Editor} from "@/Components/Editor/Editor"
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout"
import {useZustand} from "@/store/useZustand"
import {PageProps} from "@/types"
import {Head} from "@inertiajs/react"
import axios from "axios"
import {useEffect} from "react"

export default function Dashboard({ auth }: PageProps) {
  const { setPageArr } = useZustand()

  useEffect(() => {
    axios.get("/getPages").then((res) => {
      setPageArr(res.data.pages)
    })
  }, [])

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard"/>
      <Editor/>
    </AuthenticatedLayout>
  )
}
