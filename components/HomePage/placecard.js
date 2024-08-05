import Image from "next/image";
import styles from "./placecard.module.css";

export default function PlaceCard({
  imageSrc,
  name,
  city,
  price,
  description,
  width,
  height,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={`${city} image`}
          width={width}
          height={height}
        />
      </div>
      <div className={styles.info}>
        <div className={styles.locationpricecontainer}>
          <div className={styles.placeinfocontainer}>
            <h4 className={styles.country}>{`${name}, `} </h4>
            <h4 className={styles.city}>{city}</h4>
          </div>
          <h4 className={styles.price}>{price}</h4>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
