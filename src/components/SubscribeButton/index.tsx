import styles from "./styles.module.scss";

interface SubscribePropsButton {
  priceId: string;
}

export function SubscribeButton({ priceId }: SubscribePropsButton) {
  return (
    <button type="button" className={styles.SubscribeButton}>
      Subscribe now
    </button>
  );
}
