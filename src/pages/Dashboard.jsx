import React from 'react'
import { Link } from 'react-router-dom'
import Chart from 'react-apexcharts'
import { useSelector } from 'react-redux'
import StatusCard from '../components/status-card/StatusCard'
import Table from '../components/table/Table'
import statusCards from '../assets/JsonData/status-card-data.json'

const chartOptions = {
    series: [{
        name: 'Incidência',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    }, {
        name: 'Compensação',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topFive = {
    head: [
        'Nome',
        'Cargo',
        'Saldo'
    ],
    body: [
        {
            "username": "Fulano de Tal",
            "office": "QA",
            "balance": "50h"
        },
        {
            "username": "Gabriel",
            "office": "DEV",
            "balance": "50h"
        },
        {
            "username": "Ciclano",
            "office": "DEV",
            "balance": "50h"
        },
        {
            "username": "Beltrano",
            "office": "QA",
            "balance": "50h"
        },
        {
            "username": "Fulano JR",
            "office": "DEV",
            "balance": "50h"
        }
    ]
}

const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.username}</td>
        <td>{item.office}</td>
        <td>{item.balance}</td>
    </tr>
)

const latestOrders = {
    header: [
        "Matrícula",
        "Nome",
        "Cargo",
        "Saldo"
    ],
    body: [
        {
            id: "150",
            username: "Fulano de Tal",
            office: "QA",
            balance: "50h"
        },
        {
            id: "132",
            username: "Gabriel",
            office: "DEV",
            balance: "50h"
        },
        {
            id: "254",
            username: "Ciclano",
            office: "DEV",
            balance: "50h"
        },
        {
            id: "232",
            username: "Beltrano",
            office: "QA",
            balance: "50h"
        },
        {
            id: "101",
            username: "Fulano JR",
            office: "DEV",
            balance: "50h"
        }
    ]
}

const renderOrderHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderOrderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td>{item.office}</td>
        <td>{item.balance}</td>
    </tr>
)

const Dashboard = () => {

    const themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCards.map((item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard
                                        icon={item.icon}
                                        count={item.count}
                                        title={item.title}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        
                        <Chart
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark' }
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light' }
                            }}
                            series={chartOptions.series}
                            type='line'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>Top 5</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topFive.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                bodyData={topFive.body}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Ver Todos</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>Colaboradores</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                renderHead={(item, index) => renderOrderHead(item, index)}
                                bodyData={latestOrders.body}
                                renderBody={(item, index) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to='/'>Ver Todos</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
