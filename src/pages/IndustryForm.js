import './IndustryForm.scss';
import {NavLink} from 'react-router-dom';

const IndustryForm = () => {

    return(
        <section className="industry-app">
            <h3 className="industry-app__subheading">
            Cost of Living</h3>
            <div className = "industry-app__form-list">
                <div className="industry-app__form">
                    
                    <label className="" htmlFor="">Name</label>
                    
                    <input id='item_name' className="industry-app__input" type="text" placeholder="Name"/>
                </div>
                <div className="industry-app__form--button">
                    <label className="industry-app__label" htmlFor="">Age</label>
            
                    <label className="industry-app__label" htmlFor="" checked>18-34</label>
                    <input className="industry-app__input industry-app__input--height" type="radio" id="Age"
                    placeholder="18-24"/>
                    <label className="industry-app__label" htmlFor="">35-51</label>
                    <input className="industry-app__input industry-app__input--height" type="radio" id="Age"
                    placeholder="35-51"/>
                    <label className="industry-app__label" htmlFor="">52-68</label>
                    <input className="industry-app__input industry-app__input--height" type="radio" id="Age"
                    placeholder="52-68"/>
                    <label className="industry-app__label" htmlFor="">69+</label>
                    <input className="industry-app__input industry-app__input--height" type="radio" id="Age"
                    placeholder="69+"/>
                </div>
                <div className="industry-app__form">
                        <label className="industry-app__label" htmlFor="category">Gender</label>
                        <select className='industry-app__scrolling' name='gender' id="gender">                                    
                            <option value="" selected></option>
                            <option value="Man">Male/Man</option>
                            <option value="Woman">Female/Woman</option>
                            <option value="TransMale/TransMan">TransMale/TransMan</option>
                            <option value="TransFemale/TransWoman">TransFemale/TransWoman</option>
                            <option value="Non-binary">Non-binary</option>
                            <option value="Something Else">Something Else</option>
                            <option value="decline-to-answer">decline-to-answer</option>
                        </select>

                </div>
                
                <div className="industry-app__form">
                        <label className="industry-app__label" htmlFor="category">Education`</label>
                        <select className='industry-app__scrolling' name='category' id="category">                                    
                            <option value="" selected></option>
                            <option value="High School Diploma/GED" selected>High School Diploma/GED</option>
                            <option value="College Degree">College Degree</option>
                            <option value="Graduate Degree">Graduate Degree</option>
                        </select>

                </div>
            </div> 
        </section>


    )
}



export default IndustryForm;