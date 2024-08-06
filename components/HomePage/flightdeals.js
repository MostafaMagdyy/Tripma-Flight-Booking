import PlaceCard from "./placecard";
import styles from "./flightdeals.module.css";
import Image from "next/image";
export default function FlightDeals({ showfull = true, description, type }) {
  return (
    <div className={styles.outercontainer}>
      <div className={styles.descriptioncontainer}>
        <div className={styles.leftdescription}>
          <h3 className={styles.normalheader}>{description}</h3>
          <h3 className={styles.specialheader}>{type}</h3>
        </div>
        <div className={styles.rightdescription}>
          <span>All</span>
          <Image
            src={"./arrowRight.svg"}
            alt="arrowRight"
            width={32}
            height={32}
          ></Image>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.combinedcontainer}>
          <PlaceCard
            imageSrc={"./flightdeal.svg"}
            placename={"The Bund"}
            city={"Shanghai"}
            price={"$598"}
            description={"China's most international city"}
            width={410.67}
            height={397}
          ></PlaceCard>
          <PlaceCard
            imageSrc={"./flightdeal.svg"}
            placename={"The Bund"}
            city={"Shanghai"}
            price={"$598"}
            description={"China's most international city"}
            width={410.67}
            height={397}
          ></PlaceCard>
          <PlaceCard
            imageSrc={"./flightdeal.svg"}
            placename={"The Bund"}
            city={"Shanghai"}
            price={"$598"}
            description={"China's most international city"}
            width={410.67}
            height={397}
          ></PlaceCard>
        </div>
        {showfull && (
          <PlaceCard
            imageSrc={"./flightdealfull.svg"}
            placename={"The Bund"}
            city={"Shanghai"}
            price={"$598"}
            description={"China's most international city"}
            width={1312}
            height={397}
          ></PlaceCard>
        )}
      </div>
    </div>
  );
}
