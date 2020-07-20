import Head from "next/head";
import NavBar from "../components/navbar";
import Layout from "../components/layout";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <Layout>
      <img className={styles.background} src="/background.jpg"></img>
      <div
        className="container"
        style={{ maxWidth: "100%", padding: "0 0.5rem" }}
      >
        <NavBar />
        <Head>
          <title>Nguyen Thu Thao's Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.indexmain}>
          <h2
            className={styles.title}
            style={{ margin: "5.5rem 0 3rem", color: "white" }}
          >
            Blog của Nguyễn Thu Thảo
          </h2>
          <div className={styles.avatarholder}>
            <div>
              <img
                id={styles.avatar}
                className={styles.borderstyle}
                src="/avatar.jpg"
              />
            </div>
          </div>
          <br></br>
          <h2 className={(styles.title, styles.subtitle)}>
            DRAMA NGHỀ NGHIỆP - TẬP 1
          </h2>
          <h5 className={styles.title}>By Nguyễn Thu Thảo</h5>
          <p className={styles.content}>
            Tham gia facebook cũng được 9 năm rồi, này lần đầu tiên mình dành
            hẳn một mớ thời gian để ngồi viết ra 1 cái sự kiện, bởi vì sao...
            quá trời quá đất cái gọi là lòng người.
          </p>
          <p className={styles.content}>
            Làm cái nghề DỊCH VỤ thì chẳng khác nào đi làm dâu trăm họ cả, đồng
            ý là khách hàng bỏ tiền ra và mong muốn nhận được 1 dịch vụ tốt nhất
            là chuyện hiển nhiên, đương nhiên và luôn luôn đúng trong mọi thời
            đại, nhưng một vừa hai phải thì thôi, đừng có ăn gian nối dối, ăn có
            nói không chứ, người sử dụng dịch vụ hay người cung cấp dịch vụ đều
            là con người như nhau nên phải biết tôn trọng lẫn nhau chứ.
          </p>
          <p className={styles.content}>
            Chị gái tên H có sử dụng dịch vụ của mình vào ngày 14/6, mình hẹn
            chị gái 7 ngày sau có kết quả, đến ngày 15/6 (nghĩa là 1 ngày sau)
            gọi nườm nượp cho mình hỏi rằng có kết quả chưa, ừ thì mình cũng rất
            là thảo mai và nói là “Dạ chưa đâu ạ, có thì em sẽ báo chị ngay à,
            có sớm thì em báo sớm để chị đỡ lo chứ”. Chị tìm đâu ra số cá nhân
            của mình á, nhắn tin zalo cá nhân cho mình, hỏi này hỏi nọ, mình
            nhiệt tình trả lời không sót một thứ gì, thấy chị nói chuyện cũng dễ
            thương, mình cũng quý mến một tí, mình còn nhiệt tình tới nỗi...khi
            vừa có kết quả của chị là mình gọi ngay để báo cho chị hay, giải
            thích với chị này nọ cũng hơn 30 phút trò chuyện, chị ok ok cám ơn
            em nhiều lắm nha, trời ơi mình happy hết sức, giống như mình vừa làm
            chuyện gì đó để lại phúc đức 8 đời cho con cháu mình dậy đó.
          </p>
          <p className={styles.content}>
            Đến hôm nay, 21h30 ngày 23/6 chị nhắn tin vào zalo công ty của mình
            (mình sử dụng 2 zalo, 1 zalo số cá nhân và 1 zalo số công ty cấp)
            bảo chị nhận được kết quả rồi, mà sao con bé kia nó không giải thích
            một chút gì về kết quả cho chị cả, gửi cho chị tờ kết quả vậy sao
            chị hiểu được.... Ơ HAY ... mình lục lại ký ức, hay mình bị bệnh
            thần kinh phân liệt hay bị mất trí nhớ ta, chết chết sao mình có thể
            thiếu sót tới vậy chứ, nghĩ ngợi một hồi thì mình biết chị gái này
            là ai rồi, và mình rành về câu chuyện của chị ấy như thế nào, nếu
            mình không bị mất trí nhớ thì chắc chị bị khùng.
          </p>
          <p className={styles.content}>
            Mình bị tổn thương sâu sắc luôn í, cái nghề mình đang làm nó thật sự
            kinh khủng.
          </p>
        </main>

        <footer className={styles.indexfooter}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Tam Tran and{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </Layout>
  );
}
