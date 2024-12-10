// Home.jsx
import pic1 from "../../assets/nam-nu.jpg";
import pic2 from "../../assets/xeploai-gioitinh.jpg";
import pic3 from "../../assets/khoahoc.jpg";
import pic4 from "../../assets/khoahoc-xeploai.jpg";
import pic5 from "../../assets/hocluc.jpg";
import "./Home.css";

const Home = () => {
	const arr = [
		{
			img: pic1,
			title: "Tỉ lệ nam nữ",
			des: "Biểu đồ thể hiện sự phân bố giới tính với: Nam giới chiếm đa số với <span class='highlight'>86.22%</span>, nữ giới chiếm thiểu số với <span class='highlight'>13.78%</span>. Có sự chênh lệch rất lớn giữa tỉ lệ nam và nữ, với nam giới chiếm gần <span class='highlight'>7</span> lần so với nữ giới.",
		},
		{
			img: pic2,
			title: "Xếp loại theo giới tính",
			des: `Biểu đồ cột này thể hiện số lượng cụ thể của nam và nữ theo từng xếp loại học tập, cho chúng ta một góc nhìn chi tiết và trực quan hơn về sự phân bố.
            <br/><br/>
            Ở mức xếp loại khá, số lượng nam giới đạt khoảng <span class='highlight'>900</span> người, trong khi nữ giới chỉ có khoảng <span class='highlight'>150</span> người. Đây là mức xếp loại có số lượng sinh viên đông đảo nhất, cho thấy đa số sinh viên đạt được thành tích học tập ở mức độ này.
            <br/><br/>
            Đối với xếp loại giỏi, số lượng nam giới vào khoảng <span class='highlight'>320</span> người và nữ giới khoảng <span class='highlight'>50</span> người. Con số này giảm đáng kể so với mức khá, phản ánh độ khó tăng cao trong việc đạt được thành tích này.
            <br/><br/>
            Ở mức trung bình khá, nam giới có khoảng <span class='highlight'>240</span> người và nữ giới chỉ khoảng <span class='highlight'>15</span> người.`,
		},
		{
			img: pic3,
			title: "Tỉ lệ theo khóa học",
			des: `Số liệu từ biểu đồ cho thấy một diễn biến khá thú vị về quy mô các khóa học. Khóa 8 đang dẫn đầu với <span class='highlight'>548</span> sinh viên, chiếm gần một phần ba tổng số sinh viên toàn trường. Khóa 9 cũng không kém cạnh với <span class='highlight'>507</span> sinh viên, chỉ ít hơn Khóa 8 khoảng <span class='highlight'>40</span> sinh viên.
            <br/><br/>
            Đến Khóa 10, số lượng sinh viên đã giảm xuống còn <span class='highlight'>457</span> người. Sự sụt giảm này càng rõ rệt hơn ở Khóa 11 khi chỉ còn <span class='highlight'>259</span> sinh viên - một con số khá khiêm tốn so với các khóa trước đó.`,
		},
		{
			img: pic4,
			title: "Xếp loại theo khóa học",
			des: `Ở Khóa 8, số lượng sinh viên xếp loại khá chiếm đa số với khoảng <span class='highlight'>330</span> sinh viên, trong khi đó số sinh viên đạt loại giỏi chỉ khoảng <span class='highlight'>80</span> người và trung bình khá là <span class='highlight'>130</span> người.
            <br/><br/>
            Sang đến Khóa 9, vẫn duy trì xu hướng sinh viên xếp loại khá chiếm số đông với <span class='highlight'>320</span> người, nhưng điểm đáng chú ý là số lượng sinh viên giỏi đã tăng lên <span class='highlight'>110</span> người, trong khi số lượng trung bình khá giảm xuống chỉ còn <span class='highlight'>70</span> người.
            <br/><br/>
            Đến Khóa 10, số sinh viên giỏi tăng lên <span class='highlight'>130</span> người. Số sinh viên khá vẫn chiếm đa số với <span class='highlight'>270</span> người, trong khi trung bình khá tiếp tục giảm xuống <span class='highlight'>50</span> người.`,
		},
		{
			img: pic5,
			title: "Xếp loại học lực theo điểm",
			des: `Với <span class='highlight'>915</span> sinh viên (chiếm <span class='highlight'>51.67%</span>) có điểm dưới 6.5, đây sẽ là nhóm đối mặt với thách thức lớn trong việc cải thiện kết quả học tập.
            <br/><br/>
            Nhóm <span class='highlight'>797</span> sinh viên (<span class='highlight'>45%</span>) đạt điểm từ 6.5 đến 8.0 là điểm sáng của khóa học. Với mức điểm này, họ có cơ hội lớn tốt nghiệp loại khá.
            <br/><br/>
            Điều đáng chú ý là chỉ có <span class='highlight'>59</span> sinh viên (<span class='highlight'>3.33%</span>) đạt điểm trên 8.0. Con số này gợi ý rằng số lượng sinh viên tốt nghiệp loại giỏi và xuất sắc sẽ khá khiêm tốn.`,
		},
	];

	return (
		<div className="container-fluid py-5">
				<h1 className="text-center mb-5 fw-bold text-primary animate__animated animate__fadeIn">
					Phân tích Biểu đồ Thống kê
				</h1>
				{arr.map((item, index) => (
					<div
						key={index}
						className="row mb-5 p-4 rounded shadow-sm animate__animated animate__fadeInUp"
						style={{animationDelay: `${index * 0.2}s`}}
        			>
					<h3 className="text-center mb-4 text-primary fw-bold">
						{item.title}
					</h3>

					<div className="col-lg-8 mb-3">
						<div className="image-container shadow rounded overflow-hidden">
							<img
								src={item.img}
								alt={item.title}
								className="img-fluid w-100 h-auto"
							/>
						</div>
					</div>

					<div className="col-lg-4">
						<div className="analysis-text p-3 bg-light rounded">
							<p
								className="fs-5 lh-lg"
								dangerouslySetInnerHTML={{ __html: item.des }}
							></p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
