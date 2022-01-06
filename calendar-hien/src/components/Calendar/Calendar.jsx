import React from 'react';
import './Calendar.css';

function Calendar({ calendar, onDelete, onEdit }) {
    return (
        <div className='container'>
            <h2 className='d-flex justify-content-left'>Calendar</h2>
            <div className='day-container'>
                <div className="day-title-box border border-primary">Monday</div>
                <div className="day-title-box border border-primary">Tuesday</div>
                <div className="day-title-box border border-primary">Wednessday</div>
                <div className="day-title-box border border-primary">Thursday</div>
                <div className="day-title-box border border-primary">Friday</div>
                <div className="day-title-box border border-primary">Saturday</div>
                <div className="day-title-box border border-primary">Sunday</div>
                {
                    calendar.map((e, index) => (
                        <div key={index} className='day-box border border-success'>
                            <h5>day: {e.day}</h5>
                            {e.meetings.map((meet, index) => (
                                <div className='meet-box' key={index}>
                                    <div className="title-meet">
                                        <p>{meet.startTime} {meet.titile}</p>
                                    </div>
                                    <button className='icon-btn'
                                        onClick={() => {
                                            const day = e.day;
                                            onEdit({ ...meet, day })
                                        }}
                                    >
                                        <i className='fa fa-edit' />
                                    </button>
                                    <button className='icon-btn'
                                        onClick={() => {
                                            const id = meet.id;
                                            const day = e.day;
                                            onDelete({ id, day })
                                        }}
                                    >
                                        <i className='fa fa-trash' />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))
                }
            </div>
            <div style={{ height: '200px' }}></div>
        </div>
    );
}

export default Calendar;