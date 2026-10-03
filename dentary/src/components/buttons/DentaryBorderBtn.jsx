export default function DentaryBorderBtn({ children }){
    return(
        <button className="border rounded-lg px-7 py-3.5 text-sm hover:border-dentary-blue hover:text-dentary-blue">
          { children }
        </button>
    )
}