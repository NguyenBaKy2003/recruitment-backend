// Hàm middleware để xử lý yêu cầu bất đồng bộ
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    // Giải quyết promise và bắt lỗi nếu có
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
