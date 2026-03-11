import Link from "next/link"

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#1f160e]">
      <div className="absolute inset-0 bg-linear-to-b from-[#614F38]/20 via-[#614F38]/10 to-[#3D2C1A]/80 z-0 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-dalat mb-4 text-8xl font-normal text-[#E1C084] md:text-9xl">
          404
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Xin lỗi, không tìm thấy trang
        </h2>
        
        <p className="text-[#E1C084]/80 text-sm md:text-base max-w-md mx-auto mb-10 leading-relaxed">
          Đường dẫn bạn đang tìm kiếm có thể đã bị thay đổi, xóa hoặc không tồn tại. Hãy quay về trang chủ để tiếp tục thư giãn nhé.
        </p>
        
        <Link 
          href="/" 
          className="border border-[#E1C084] bg-transparent text-[#E1C084] hover:bg-[#E1C084] hover:text-[#1f160e] transition-all duration-300 px-8 py-3.5 text-sm font-semibold tracking-widest uppercase rounded-sm"
        >
          Về Trang Chủ
        </Link>
      </div>
    </div>
  )
}
