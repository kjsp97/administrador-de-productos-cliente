
export default function ErrorMessage({children} : React.PropsWithChildren) {
  return (
    <div className="text-center text-red-500 font-bold pt-10">
        {children}
    </div>
  )
}
