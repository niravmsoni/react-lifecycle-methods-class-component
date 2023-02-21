import logo from './images/react.png'

export default function Header(){
    return(
        <div className="pt-3 pl-2 py-2" style={{borderBotton:"1px solid #777"}}>
            <img src={logo} alt="" style={{height: "35px", verticalAlign: "top"}} />
            <span className="h2 pt-4 m-2 text-white-50">CycloPedia</span>
        </div>
    )
}