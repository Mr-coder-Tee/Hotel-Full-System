import React from "react";


const hoteluserData = [
    {
        month: 'Jan',
        users: 21
    },
    {
        month: 'Feb',
        users: 34
    },
    {
        month: 'Mar',
        users: 2
    },
    {
        month: 'Apr',
        users: 92
    },
    {
        month: 'May',
        users: 4
    },
    {
        month: 'Jun',
        users: 48
    },
    {
        month: 'Jul',
        users: 29
    },
    {
        month: 'Aug',
        users: 99
    },
    {
        month: 'Sep',
        users: 1
    },
    {
        month: 'Oct',
        users: 10
    },
    {
        month: 'Nov',
        users: 71
    },
    {
        month: 'Dec',
        users: 11
    }
]

const appuserData = [
    {
        month: 'Jan',
        users: 95
    },
    {
        month: 'Feb',
        users: 83
    },
    {
        month: 'Mar',
        users: 23
    },
    {
        month: 'Apr',
        users: 101
    },
    {
        month: 'May',
        users: 71
    },
    {
        month: 'Jun',
        users: 111
    },
    {
        month: 'Jul',
        users: 99
    },
    {
        month: 'Aug',
        users: 100
    },
    {
        month: 'Sep',
        users: 109
    },
    {
        month: 'Oct',
        users: 99
    },
    {
        month: 'Nov',
        users: 32
    },
    {
        month: 'Dec',
        users: 109
    }
]




const OverView = () => {
    return (
        <div className={`overviewContainer taps`}>
            <div className="cols">
                <div className="hotelAdmins">
                    <h3>Hotel Admin</h3>
                    <h4>+27 new users</h4>
                    <h2>Total Users: 277</h2>
                </div>
                <div className="hotelMonthlyUsers">
                    <h2>Hotel Admin Statistics</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Users</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                hoteluserData.map((data) => (
                                    <tr key={data.month}>
                                        <td>{data.month}</td>
                                        <td>{data.users}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="cols">
                <div className="appUser">
                    <h3>App User</h3>
                    <h4>+27 new users</h4>
                    <h2>Total Users: 490</h2>
                </div>
                <div className="monthlyAppUsers">
                    <h2>Peace Mobile App</h2>
                    <table>
                        <tr>
                            <th>Month</th>
                            <th>Users</th>
                        </tr>
                        {
                            appuserData.map((data) => (
                                <tr key={data.month}>
                                    <td>{data.month}</td>
                                    <td>{data.users}</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
            </div>
        </div>
    );
};

export default OverView;
