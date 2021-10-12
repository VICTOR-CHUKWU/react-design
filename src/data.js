import React from 'react';
import { RiPlaneFill, RiTruckFill, RiShipLine } from 'react-icons/ri';
import { FaUserAstronaut } from 'react-icons/fa';

export const dataSelect = [
    {
        index: 1,
        title: 'Air Freight',
        icon: <RiPlaneFill />
    },
    {
        index: 2,
        title: 'Sea Freight',
        icon: <RiShipLine />
    },
    {
        index: 3,
        title: 'Inland (Truck and Barge)',
        icon: <RiTruckFill />
    },
    {
        index: 4,
        title: 'Customs Clearance',
        icon: <FaUserAstronaut />
    },
];

export const additionalData = [
    {
        index: 1,
        title: "Export Forwarding",
        descriptiion: "We handle custom clearance and documentation"
    },
    {
        index: 2,
        title: "Import Customs Clearance",
        descriptiion: "We handle import custom Regulatory Requirements"
    },
    {
        index: 3,
        title: "Cargo Insurance",
        descriptiion: "Protect your cargo from logistics risk up to its value"
    },
    {
        index: 4,
        title: "Transport/Delivery",
        descriptiion: "We deliver the cargo to your door step from the port"
    },
]