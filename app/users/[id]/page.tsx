const page = ({ params }: { params: { id: string } }) => {
    const id = params.id
    console.log(id)                         
  return (
    <div>page</div>
  )
}

export default page