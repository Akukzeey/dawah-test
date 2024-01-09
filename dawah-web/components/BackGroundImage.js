
export default function BackGroundImage({ img, header }) {
    return (
            <div id='background-img'  className='background-img' style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',display:'flex',justifyContent:'center',alignItems:"center",height:'40vh'}}>
                <h2 className='background-img-header'>{header}</h2>
            </div>
    );
}