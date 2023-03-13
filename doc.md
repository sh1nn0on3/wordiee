<!-- xóa file không cần thiết -->

<!-- header -->

- Tạo components / Heading
  - truyền type ở App
    - typescript :
      - interface trong header {type , text }
      - truyền chỉnh từ ngoài
  - setup ban đầu
    - 11:00 css { font chữ , màu css , .. }
    - css : heading.css
      - h1 : fs , fw , align

<!-- board -->
- Tạo board
  - App :
    - tạo div .board-container
    - useState : string[] 5 cột 6 dòng {board , set..}
  - tạo folder Board
    - board.tsx
      - lấy props là board
      - .board
        - board.map (square , index ) -- 2 tham số
          - square
          - tạo component square ( truyền giá trị val , index )
            - in giá trị {val }
              ? 26:16 dùng flex flex -col
      - .keyboard
        - tạo Keyboard.tsx
          - const rows string tạo [ "tạo các hàng" ] 3 hàng chữ có ngăn cách = " "
          - .keyboard-container
              <!-- để lấy được chữ thì phải map 2 lần -->
            - dùng map lọc qua các rows < 30:41 >
              - rows.map(row , index){ ... return .row {} }
              - dùng row.split để lọc lại các ký tự cách thành mảng
              - row.split.map((letter , index) > { ... return }) --> lọc lấy chữ < 35:45 >
              - tạo .letter-row
                - lấy letter là giá trị truyền vào < 36:44 >
                  - muốn in hoa thì .toUpperCase()
                - tạo folder Key.tsx
                  - nhận giá trị letter và css
