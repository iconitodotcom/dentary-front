
export default function DentaryBtn({ children, onClick, type = 'button' }){
    return(
        <button
            type={type}
            onClick={onClick}
            className="bg-dentary-blue-dark text-white rounded-lg p-3 hover:translate-y-[-1px] hover:shadow-xl"
        >
          {children}
        </button>
    )
}