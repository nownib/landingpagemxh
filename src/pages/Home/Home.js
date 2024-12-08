import pic1 from "../../assets/nam-nu.jpg";
import pic2 from "../../assets/xeploai-gioitinh.jpg";
import pic3 from "../../assets/khoahoc.jpg";
import pic4 from "../../assets/khoahoc-xeploai.jpg";
import pic5 from "../../assets/hocluc.jpg";

const Home = () => {
	const arr = [
		{
			img: pic1,
			title: "Tỉ lệ nam nữ",
			des: "Biểu đồ thể hiện sự phân bố giới tính với: Nam giới chiếm đa số với 86.22%, nữ giới chiếm thiểu số với 13.78%. Có sự chênh lệch rất lớn giữa tỉ lệ nam và nữ, với nam giới chiếm gần 7 lần so với nữ giới.",
		},
		{
			img: pic2,
			title: "Xếp loại theo giới tính",
			des: `Biểu đồ cột này thể hiện số lượng cụ thể của nam và nữ theo từng xếp loại học tập, cho chúng ta một góc nhìn chi tiết và trực quan hơn về sự phân bố.
Ở mức xếp loại khá, số lượng nam giới đạt khoảng 900 người, trong khi nữ giới chỉ có khoảng 150 người. Đây là mức xếp loại có số lượng sinh viên đông đảo nhất, cho thấy đa số sinh viên đạt được thành tích học tập ở mức độ này.
Đối với xếp loại giỏi, số lượng nam giới vào khoảng 320 người và nữ giới khoảng 50 người. Con số này giảm đáng kể so với mức khá, phản ánh độ khó tăng cao trong việc đạt được thành tích này.
Ở mức trung bình khá, nam giới có khoảng 240 người và nữ giới chỉ khoảng 15 người. Điều thú vị là số lượng này thấp hơn cả mức giỏi, có thể cho thấy sinh viên có xu hướng hoặc nỗ lực vươn lên các mức cao hơn, hoặc rơi xuống mức thấp hơn thay vì duy trì ở mức trung bình.
Đặc biệt ở mức xuất sắc, số lượng sinh viên rất ít, chỉ đếm được trên đầu ngón tay, thể hiện độ khó và tính chọn lọc cao của mức xếp loại này. Tuy số lượng rất nhỏ nhưng tỉ lệ nữ ở mức này lại cao hơn các mức khác, một lần nữa khẳng định dù số lượng ít nhưng nữ giới thường có xu hướng đạt thành tích học tập tốt.
Nhìn chung, biểu đồ cho thấy một sự phân bố không đều cả về giới tính lẫn xếp loại, với đa số sinh viên tập trung ở mức khá và giảm dần ở các mức cao hơn. Nam giới chiếm số đông áp đảo ở mọi mức xếp loại, nhưng điều này có thể do tổng số nam giới trong toàn trường vốn đã cao hơn nhiều so với nữ giới.`,
		},
		{
			img: pic3,
			title: "Tỉ lệ theo khóa học",
			des: `Số liệu từ biểu đồ cho thấy một diễn biến khá thú vị về quy mô các khóa học. Khóa 8 đang dẫn đầu với 548 sinh viên, chiếm gần một phần ba tổng số sinh viên toàn trường. Khóa 9 cũng không kém cạnh với 507 sinh viên, chỉ ít hơn Khóa 8 khoảng 40 sinh viên.
Đến Khóa 10, số lượng sinh viên đã giảm xuống còn 457 người. Sự sụt giảm này càng rõ rệt hơn ở Khóa 11 khi chỉ còn 259 sinh viên - một con số khá khiêm tốn so với các khóa trước đó. Có thể thấy từ Khóa 8 đến Khóa 11, số lượng sinh viên đã giảm gần một nửa, từ 548 xuống còn 259 sinh viên.
Điều đáng nói là sự sụt giảm này diễn ra khá đều đặn qua từng khóa, không có sự đột biến nào ngoại trừ ở Khóa 11. Nếu Khóa 8, 9, 10 vẫn duy trì được số lượng trên 450 sinh viên thì đến Khóa 11 con số này đã giảm mạnh xuống chỉ còn 259 sinh viên. Có lẽ đây là kết quả của việc điều chỉnh chính sách tuyển sinh hoặc ảnh hưởng từ tình hình xã hội trong thời gian gần đây
`,
		},
		{
			img: pic4,
			title: "Xếp loại theo khóa học",
			des: `Nhìn vào biểu đồ phân bố xếp loại theo từng khóa học, ta thấy một bức tranh khá thú vị về thành tích học tập. Ở Khóa 8, số lượng sinh viên xếp loại khá chiếm đa số với khoảng 330 sinh viên, trong khi đó số sinh viên đạt loại giỏi chỉ khoảng 80 người và trung bình khá là 130 người.
Sang đến Khóa 9, vẫn duy trì xu hướng sinh viên xếp loại khá chiếm số đông với 320 người, nhưng điểm đáng chú ý là số lượng sinh viên giỏi đã tăng lên 110 người, trong khi số lượng trung bình khá giảm xuống chỉ còn 70 người. Điều này cho thấy chất lượng học tập của Khóa 9 có phần cải thiện hơn so với Khóa 8.
Đến Khóa 10, mặc dù tổng số sinh viên có giảm nhưng số lượng sinh viên giỏi lại tăng lên 130 người - cao nhất trong tất cả các khóa. Số sinh viên khá vẫn chiếm đa số với 270 người, trong khi trung bình khá tiếp tục giảm xuống 50 người.
Khóa 11 có tổng số sinh viên ít nhất, nhưng tỷ lệ phân bố các mức xếp loại khá cân đối. Với khoảng 90 sinh viên giỏi, 155 sinh viên khá và chỉ 15 sinh viên trung bình khá, có thể thấy dù số lượng ít nhưng chất lượng học tập của khóa này khá tốt.
Đặc biệt, số lượng sinh viên xuất sắc ở tất cả các khóa đều rất ít, chỉ đếm trên đầu ngón tay, cho thấy tiêu chuẩn để đạt được mức xếp loại này là vô cùng khắt khe.
`,
		},
		{
			img: pic5,
			title: "Xếp loại học lực theo điểm",
			des: `Phân bố điểm số của sinh viên cho thấy một bức tranh khá thú vị về khả năng xếp loại tốt nghiệp sắp tới. Với 915 sinh viên (chiếm 51.67%) có điểm dưới 6.5, đây sẽ là nhóm đối mặt với thách thức lớn trong việc cải thiện kết quả học tập. Nhiều khả năng, phần lớn trong số này sẽ tốt nghiệp loại trung bình, một số có thể phải kéo dài thời gian học tập để cải thiện điểm số.
Nhóm 797 sinh viên (45%) đạt điểm từ 6.5 đến 8.0 là điểm sáng của khóa học. Với mức điểm này, họ có cơ hội lớn tốt nghiệp loại khá, thậm chí một số em có thể vươn lên đạt loại giỏi nếu duy trì được đà học tập tốt trong các học kỳ còn lại. Đây sẽ là nhóm tạo nên "chất lượng trung bình" của khóa tốt nghiệp.
Điều đáng chú ý là chỉ có 59 sinh viên (3.33%) đạt điểm trên 8.0. Con số này gợi ý rằng số lượng sinh viên tốt nghiệp loại giỏi và xuất sắc sẽ khá khiêm tốn. Tuy nhiên, đây có thể là những sinh viên tiềm năng, có khả năng duy trì thành tích cao và tạo điểm nhấn cho chất lượng đào tạo của trường.
So với các năm học trước, phân bố điểm số này có thể cho thấy một sự sụt giảm nhẹ về chất lượng. Thông thường, tỷ lệ sinh viên đạt loại khá-giỏi thường dao động khoảng 60-65%, nhưng năm nay con số này có thể chỉ đạt khoảng 48-50%. Điều này đặt ra thách thức cho cả giảng viên và sinh viên trong việc cải thiện kết quả trong các học kỳ còn lại.
Nếu xu hướng này tiếp tục duy trì, có thể dự đoán cơ cấu xếp loại tốt nghiệp sẽ là: khoảng 45-50% loại trung bình, 40-45% loại khá, và chỉ khoảng 5-10% đạt loại giỏi trở lên. Đây sẽ là một trong những khóa có tỷ lệ sinh viên tốt nghiệp loại khá-giỏi thấp hơn so với mặt bằng chung của trường trong những năm gần đây.

`,
		},
	];

	return (
		<div>
			<h1>Phân tích các chart</h1>
			{arr.map((item, index) => {
				return (
					<div className="row">
						<h3 className="text-center my-5">{item.title}</h3>
						<div className="col-8">
							<img src={item.img} alt="" />
						</div>
						<div className="col-4">
							<p className="fs-5">{item.des}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Home;
