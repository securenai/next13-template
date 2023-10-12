import Image from 'next/image'

async function DataList() {
  const res = await fetch(process.env.MOCKAPI_API_URL + '/cats')
  const result = await res.json()
  console.log(result)
  return (
    <div className="flex gap-5">
      {result.map((item: any) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <Image src={item.avatar} width={320} height={240} alt="" />
        </div>
      ))}
    </div>
  )
}

export default DataList
