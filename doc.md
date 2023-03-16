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

<!-- nhấn vào key  -->

<< sử dụng redux cũng như useContext -- truyền giá trị vào global state >>

- key

  - onClick trong letter (chooseLetter)
  - const chooseLetter
    ? dùng useContext được k ? demo thử trước

    - hướng dùng về redux < 42:48 > tạo folder redux
      <!-- -boardSlice.ts -->

      - export const boardSlice = createSlice({ name | initial | reducer })
        - name : " board "
        - gọi ở ngoài initialState = { board : [ mảng board lấy từ App(board) ] }
        - reducers : { }
          - setBoard : ( state , action ) => { state.board = action.payload }
      - export const { setBoard } = boardSlice.actions;
      - export default boardSlice.reducer
      <!-- - store.ts -->
      - import { configureStore } from "@redux/toolkit"
      - export configureStore { ... reducer:{} }
        - boardReducer -- đặt trong boardSlice.ts
        - reducer : { board : boardReducer }
        <!-- Warp Provider trong index.tsx -->
      - import { Provider } from " react-redux "
      - import store from " ./redux/store"
      - Wrap

        - Provider store = { store }

            <!-- App.tsx -->
          <!-- - tạo interface.ts -->

        - interface boardState { board : string[] }
        - export interface rootState { board : boardState }

      - useSeletor
        - import useSeletor from " react-redux "
        - const board = useSeletor( (state.rootState) => state.board.board )

<!-- ******* Part 2  ******** -->

- Animation

  - add vào Square.tsx
    - import { motion }
    - wrap vào ...
      - motion.div animate = { val ? filled : unfilled } variants = { ... variants }
        - tạo const variants = { ... }
          - filled : () => { scale | transition }
          - unfilled : () => { scale | transition }

- Logic Enter xuống dòng
  - chia làm 5 hàng < dùng hàm làm tròn math.floor >
  - setUp :
    - boardSlice.tsx : add
      - row : 0 | key : ""
      - incRow : ( state ) => { state.row++ }
      - setKey : ( state , action ) => { state.key = action.payload }
      - export
    - vào interface add row | key
  - key.tsx
    - let currentRow = math.floor(...) || const row =
    - trong chooseLetter
      - if ( currentRow > row ) return ;
  - keyboard.tsx
    - handleEnter() => { ... }
      - if (possition % 5 === 0 && possition !== 0 ) { ... }
        - dispatch(incRow())
    - handleBack () => { ... }
      - chặn xóa dòng dưới
      - if( Math.floor(( possition - 1 ) / 5 ) < row ) return ;

- boardSlice.tsx
    - add correctWord : " ... " < điền vào là từ cần tìm >
    - thêm lại vào interface.ts
  - square.tsx
    - lấy correctWord || position từ redux và truyền từ interface
    <!-- tạo các ô màu như lỗi, đúng , gần đúng -->
    - tạo useState
      - corrent <boolean> false // ô đúng
      - almost <boolean> false // ô gần đúng
      - wrong <boolean> false // ô sai
      <!-- check từ  --> 
    - let currentPos = ( logic số thứ tự )  < wordLastIndex = 4 >
      - ex <
        position === 5
        ? wordLastIndex
        : position > 5 && position % 5 === 0
        ? wordLastIndex
        : (position % 5 ) - 1
        > < (position - 1 ) % 5 >
    - dùng useEffect(() => {} , [ val ])
 