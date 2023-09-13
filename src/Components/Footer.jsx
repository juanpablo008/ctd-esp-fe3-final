import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>
      <p className="text">Powered by</p>
      <img className="image" src="https://res.cloudinary.com/dk8ilhsow/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694189901/DH_xgeo6i.jpg" alt='DH-logo'/>
      <ul className="social-media">
        <li><Link to={"/"}><img src="https://res.cloudinary.com/dk8ilhsow/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694189902/ico-whatsapp_kxnn96.jpg?_s=public-apps" alt="What's app" /></Link></li>
        <li><Link to={"/"}><img src="https://res.cloudinary.com/dk8ilhsow/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694189902/ico-tiktok_azfwmm.jpg?_s=public-apps" alt="Tiktok" /></Link></li>
        <li><Link to={"/"}><img src="https://res.cloudinary.com/dk8ilhsow/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694189901/ico-instagram_ns3b2i.jpg?_s=public-apps" alt="Instagram" /></Link></li>
        <li><Link to={"/"}><img src="https://res.cloudinary.com/dk8ilhsow/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1694189901/ico-facebook_gjlgel.jpg?_s=public-apps" alt="Facebook" /></Link></li>
      </ul>
    </footer>
  )
}
