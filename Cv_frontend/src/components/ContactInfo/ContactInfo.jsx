import style from "./ContactInfo.module.css";

function ContactInfo({ phone, email, facebook, instagram, address }) {
  return (
    <div className={style["contact-info"]}>
      <h3 className={style["main-title"]}>Contact Info</h3>
      <ul>
        <li>
          <i className="phone">Phone:</i>
          {phone}
        </li>
        <li>
          <i className="fax">E-mail:</i>
          {email}
        </li>
        <li>
          <i className="facebook">Facebook:</i>
          {facebook}
        </li>
        <li>
          <i className="instagram">Instagram:</i>
          {instagram}
        </li>
        <li>
          <i className="address">Address:</i>
          {address}
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
