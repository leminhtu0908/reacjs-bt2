import logo from './logo.svg';
import './App.css';
import Bai2 from './Bai2';

function App() {



  const ul = document.querySelectorAll('ul li');
  for (let i = 0; i <= ul.length - 1; i++) {
    console.log(ul[i]);
    const test = document.getElementsByTagName('p')
    console.log(test);
  }

  return (
    <div className="App">
      <table id="table_student" className="display">
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1 Data 1</td>
            <td>Row 1 Data 2</td>
            <td>Row 1 Data 2</td>
          </tr>
          <tr>
            <td>Row 2 Data 1</td>
            <td>Row 2 Data 2</td>
            <td>Row 2 Data 2</td>
          </tr>
        </tbody>
      </table>

      <ul id="student-list">
        <h1>
          Student List
        </h1>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
        <li>
          <p>Code: <span>asdasd</span></p>
          <p>Name: <span>Nguyễn Tuấn Khang</span></p>
          <p>Class: <span>D18_TH11</span></p>
        </li>
      </ul>


      <Bai2></Bai2>
    </div>
  );
}

export default App;
