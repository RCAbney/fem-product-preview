import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import productImgDesktopSrc from "../public/images/image-product-desktop.jpg";
import productImgMobileSrc from "../public/images/image-product-mobile.jpg";

export default function Home() {
  const [width, setWidth] = useState(null);
  const breakpoint = 769;

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Front End Mentor - Product Preview Card Component</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <article>
          <div className={styles.productCardWrap}>
            <div className={styles.productCardImage}>
              {width < breakpoint ? (
                <Image
                  alt="bottle of perfume"
                  src={productImgMobileSrc}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                <Image
                  alt="bottle of perfume"
                  src={productImgDesktopSrc}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <div className={styles.productCardText}>
              <p className={styles.productPreview}>Perfume</p>

              <h1 className={styles.productTitle}>
                Gabrielle Essence Eau De Parfum
              </h1>

              <p className={styles.bodyCopy}>
                A floral, solar and voluptuous interpretation composed by
                Olivier Polge, Perfumer-Creator for the House of CHANEL.
              </p>
              <div className={styles.prices}>
                <p className={styles.productSalePrice}>$149.99</p>
                <p className="sr-only">Regular price - $169.99</p>
                <del className={styles.regularPrice}>$169.99</del>
              </div>

              <button className={styles.addToCartBtn}>
                <span className={styles.btnText}>Add to Cart</span>
              </button>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
