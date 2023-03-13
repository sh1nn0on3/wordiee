<!-- xóa file không cần thiết -->

<!-- header -->
+ Tạo components / Heading 
    + truyền type ở App 
        + typescript : 
            + interface trong header {type , text }
            + truyền chỉnh từ ngoài 
    + setup ban đầu 
        + 11:00 css { font chữ , màu css , .. }
        + css : heading.css 
            + h1 : fs , fw , align 

<!-- board -->
+ Tạo board 
    + App : 
        + tạo div .board-container 
        + useState : string[] 5 cột 6 dòng {board , set..}
    + tạo folder Board 
        + board.tsx 
            + lấy props là board 
            + .board 
                + board.map (square , index ) -- 2 tham số
                    + square  
                    + tạo component square ( truyền giá trị val , index )
                        + in giá trị {val }