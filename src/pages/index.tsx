import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';

// 만약 CSS 모듈을 사용 중이라면 아래 줄도 확인하세요
import styles from './index.module.css';
// src/pages/index.tsx 내의 HomepageHeader 함수 수정 예시

export default function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">SAM's Dev Lab</h1>
        <p className="hero__subtitle">데이터 분석과 AI를 연구하는 공간입니다.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog">
            블로그 읽어보기 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}
