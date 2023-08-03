export default function Header({subtitle, title}){
    return (
        <>
        <header className = "row">
            <div className="col-md-2">
                <img src="/images/klogo.jpg" alt="Logo" className="img-fluid logo"/>
            </div>
            <div className='col-md-7 mt-5 subtitle'>
                {subtitle}
            </div>
        </header>
        </>
    )
}