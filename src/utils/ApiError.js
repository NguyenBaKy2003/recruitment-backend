class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    // Thông điệp mặc định
    errors = [],
    // Danh sách lỗi (nếu có)
    stack = ""
    // Thông tin stack trace
  ) {
    super(message);
    // Gọi hàm khởi tạo của lớp `Errors` cha
    this.statusCode = statusCode;
    // Mã trạng thái HTTP
    this.data = null;
    // Không có dữ liệu trả về
    this.message = message;
    // Thông điệp lỗi
    this.success = false;
    // Đánh dấu yêu cầu thất bại
    this.errors = errors;
    // Danh sách lỗi chi tiết (nếu có)
    if (stack) {
      this.stack = stack;
      // Ghi đè thông tin stack trace nếu có
    }
  }
}

export { ApiError };
