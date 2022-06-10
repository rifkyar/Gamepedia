import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Categories from "../components/ListCategories";
import Games from "../components/ListGames";
import Hasils from "../components/ListHasil";

const Shop = () => {
    return (
        <>
            <div>
                <Row>
                    <Categories />
                    <Games />
                    <Hasils />
                </Row>
            </div>
        </>
    )
}
export default Shop;