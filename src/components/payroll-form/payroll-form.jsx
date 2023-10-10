import React, {useState, useEffect} from "react";
import profile1 from '../../assets/profile-images/Ellipse -3.png';
import profile2 from '../../assets/profile-images/Ellipse 1.png';
import profile3 from '../../assets/profile-images/Ellipse -8.png';
import profile4 from '../../assets/profile-images/Ellipse -7.png';
import './payroll-form.css'

const PayrollForm = (props) => {
    let initialValue = {
        name: '',
        profileArray: [
            {url: '../../assets/profile-images/Ellipse -3.png'},
            {url: '../../assets/profile-images/Ellipse 1.png'},
            {url: '../../assets/profile-images/Ellipse -8.png'},
            {url: '../../assets/profile-images/Ellipse -7.png'},
        ],
        allDepartment : [
            'HR', 'Sales', 'Finance', 'Engineer', 'Others'
        ],
        departmentValue: [],
        gender: '',
        salary: '',
        day: '1',
        month: 'Jan',
        year: '2020',
        startDate: '',
        notes: '',
        id: '',
        profileUrl: '',
        isUpdate: false,
        error: {
            department: '',
            name: '',
            gender: '',
            salary: '',
            profileUrl: '',
            startDate: ''
        }
    }

    const [formValue, setForm] = useState(initialValue);

    const changeValue = (event) => {
        setForm({...formValue, [event.target.name]: event.target.value})
    }

    const onCheckChange = (name) => {
        let index = formValue.departmentValue.indexOf(name);
        let checkArray = [...formValue.departmentValue]
        if (index > -1)
            checkArray.splice(index, 1)
        else
            checkArray.push(name);
        setForm({...formValue, departmentValue: checkArray});
    }

    const getChecked = (name) => {
        return formValue.departmentValue && formValue.departmentValue.includes(name);
    }

    const validData = async () => {
        let isError = false;
        let error = {
            department: '',
            name: '',
            gender: '',
            salary: '',
            profileUrl: '',
            startDate: ''
        }
        if (formValue.name.length < 1){
            error.name = 'name is a required field'
            isError = true;
        }
        if (formValue.gender.length < 1){
            error.name = 'gender is a required field'
            isError = true;
        }
        if (formValue.salary.length < 1){
            error.name = 'salary is a required field'
            isError = true;
        }
        if (formValue.profileUrl.length < 1){
            error.name = 'profile is a required field'
            isError = true;
        }
        if (formValue.department.length < 1){
            error.name = 'department is a required field'
            isError = true;
        }
        await setForm({...formValue, error:error})
        return isError;
    }

    const save = async (event) => {
        event.preventDefault();
    }

    const reset = () => {
        setForm({...initialValue, id: formValue.id, isUpdate: formValue.isUpdate});
        console.log(formValue);
    }

  return (
    <div className="payroll-main">
        {/* <Toolbar /> */}
        <div className="content">
            <form className="form" action="#" onSubmit={save}>
                <div className="form-head">Employee Payroll Form</div>
                <div className="row">
                    <label className="label" htmlFor="name">Name</label>
                    <input className="input" type="text" name="name" id="name" value={formValue.name} onChange={changeValue} placeholder="Your Name..."/>
                </div>
                <div className="error">{formValue.error.name}</div>
                <div className="row">
                    <label className="label text" htmlFor="profileUrl">Profile Image</label>
                    <div className='profile-radio-button'>
                        <label>
                            <input type="radio" checked={formValue.profileUrl==='../../assets/profile-images/Ellipse -3.png'} name="profileUrl" 
                            value="../../assets/profile-images/Ellipse -3.png" onChange={changeValue} />
                            <img className="profile" src={profile1} alt=""/>
                        </label>
                        <label >
                            <input type="radio" checked={formValue.profileUrl==='../../assets/profile-images/Ellipse 1.png'} name="profileUrl" 
                            value="../../assets/profile-images/Ellipse -1.png" onChange={changeValue} />
                            <img className="profile" src={profile2} alt=""/>
                        </label>
                        <label >
                            <input type="radio" checked={formValue.profileUrl==='../../assets/profile-images/Ellipse -8.png'} name="profileUrl" 
                            value="../../assets/profile-images/Ellipse -2.png" onChange={changeValue} />
                            <img className="profile" src={profile3} alt=""/>
                        </label>
                        <label >
                            <input type="radio" checked={formValue.profileUrl==='../../assets/profile-images/Ellipse -7.png'} name="profileUrl" 
                            value="../../assets/profile-images/Ellipse -7.png" onChange={changeValue} />
                            <img className="profile" src={profile4} alt=""/>
                        </label>
                    </div>
                </div>
                <div className="error">{formValue.error.profileUrl}</div>
                <div className="row">
                    <label className="label text" htmlFor="gender">Gender</label>
                    <div>
                        <input type="radio" id="male" onChange={changeValue}  name="gender" value="male"/>
                        <label className="text" htmlFor="male">Male</label>
                        <input type="radio" id="female" onChange={changeValue}  name="gender" value="female"/>
                        <label className="text" htmlFor="female">Female</label>
                    </div>
                </div>
                <div className="error">{formValue.error.gender}</div>
                <div className="row">
                    <label className="label text" htmlFor="department">Departent</label>
                    <div>
                        {formValue.allDepartment.map(item => (
                            <span key={item}>
                                <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                defaultChecked={() => getChecked(item)} value={item}/>
                                <label className="text" htmlFor="item">{item}</label>
                            </span>
                        ))}
                    </div>
                </div>
                <div className="error">{formValue.error.department}</div>
                <div className="row">
                    <label className="label text" htmlFor="salary">Salary</label>
                    <input className="salary-input" type="number" onChange={changeValue} id="salary" value={formValue.salary} name="salary" placeholder="Salary"/>
                </div>
                <div className="error">{formValue.error.salary}</div>
                <div className="row"><label className="label text" htmlFor="startDate">Start Date</label><div>
                <select onChange={changeValue} name="day" id="day"><option value="1">1</option><option value="2">2</option></select>
                <select onChange={changeValue} name="month" id="month"><option value="1">1</option><option value="2">2</option></select>
                <select onChange={changeValue} name="year" id="year"><option value="2020">2020</option><option value="2021">2021</option></select>
                </div>
                </div>
                <div className="error">{formValue.error.startDate}</div>
                <div className="row">
                    <label className="label text" htmlFor="notes">Notes</label>
                    <textarea className="input" onChange={changeValue} value={formValue.notes} name="notes" id="notes" 
                    placeholder="add your notes.." style={{height:'100%'}}></textarea>
                </div>
                <div className="buttonParent">
                    <a href="dashboard" className="restButton button cancelButon">Cancel</a>
                    <div className="submit-reset">
                        <button type="submit" className="button submitButton" >{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                        <button type="button" onClick={reset} className="resetButton button">Reset</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default PayrollForm;