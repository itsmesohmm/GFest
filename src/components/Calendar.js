// src/components/Calendar.js
import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = ({ events = [] }) => {  // Default to an empty array if events is undefined
    const [currentDate, setCurrentDate] = useState(new Date());
    const [highlightedDate, setHighlightedDate] = useState(currentDate);

    useEffect(() => {
        const today = new Date();
        setCurrentDate(today);
        setHighlightedDate(today);
    }, []);

    const handleDateClick = (date) => {
        setHighlightedDate(date);
    };

    const renderDays = () => {
        const days = [];
        const month = highlightedDate.getMonth();
        const year = highlightedDate.getFullYear();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const totalDays = lastDay.getDate();

        // Add blank days for the start of the month
        for (let i = 1; i < firstDay.getDay(); i++) {
            days.push(<div key={`blank-${i}`} className="calendar-day blank" />);
        }

        // Add days of the month
        for (let day = 1; day <= totalDays; day++) {
            const eventDate = new Date(year, month, day);
            const hasEvent = events.some(event => {
                const eventDateObj = new Date(event.date);
                return eventDateObj.toDateString() === eventDate.toDateString();
            });
            days.push(
                <div
                    key={day}
                    className={`calendar-day ${eventDate.toDateString() === currentDate.toDateString() ? 'today' : ''} ${hasEvent ? 'event-day' : ''}`}
                    onClick={() => handleDateClick(eventDate)}
                >
                    {day}
                    {hasEvent && <span className="event-indicator">●</span>}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="calendar">
            <h2>Calendar</h2>
            <div className="calendar-grid">
                {renderDays()}
            </div>
            <div className="event-details">
                <h3>Events on {highlightedDate.toDateString()}</h3>
                <ul>
                    {events
                        .filter(event => new Date(event.date).toDateString() === highlightedDate.toDateString())
                        .map(event => (
                            <li key={event.id}>{event.title}</li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default Calendar;
