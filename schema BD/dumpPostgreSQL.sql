--
-- PostgreSQL database dump
--

-- Dumped from database version 16.3 (Debian 16.3-1.pgdg120+1)
-- Dumped by pg_dump version 16.3 (Debian 16.3-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cliente; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.cliente (
    id_cod_cli integer NOT NULL,
    nome_cli character varying(50) NOT NULL,
    cpf_cli character varying(11),
    cnpj_cli character varying(14),
    uf_cli character varying(2) NOT NULL,
    mun_cli character varying(20) NOT NULL,
    ender_cli character varying(30),
    telef_cli character varying(15) NOT NULL,
    cep_cli character varying(10) NOT NULL,
    email_cli character varying(50) NOT NULL,
    CONSTRAINT chk_cli_cpf_cnpj CHECK ((((cpf_cli IS NOT NULL) AND (cnpj_cli IS NULL)) OR ((cpf_cli IS NULL) AND (cnpj_cli IS NOT NULL))))
);


--
-- Name: cliente_id_cod_cli_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.cliente_id_cod_cli_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: cliente_id_cod_cli_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.cliente_id_cod_cli_seq OWNED BY public.cliente.id_cod_cli;


--
-- Name: estoque; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.estoque (
    id_estoque integer NOT NULL,
    nf_venda character varying(100),
    total_estoque_valor double precision NOT NULL,
    quant_prod_estoque integer NOT NULL,
    saldo_estoque_prod integer NOT NULL,
    fk_cod_prod integer NOT NULL
);


--
-- Name: estoque_id_estoque_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.estoque_id_estoque_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: estoque_id_estoque_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.estoque_id_estoque_seq OWNED BY public.estoque.id_estoque;


--
-- Name: fornecedores; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.fornecedores (
    id_cod_forn integer NOT NULL,
    nome_forn character varying(50) NOT NULL,
    ender_forn character varying(30) NOT NULL,
    mun_forn character varying(20) NOT NULL,
    cep_forn character varying(15) NOT NULL,
    uf_forn character varying(10) NOT NULL,
    tel_forn character varying(20) NOT NULL,
    email_forn character varying(30) NOT NULL,
    cnpj_forn character varying(20) NOT NULL,
    preco_forn double precision NOT NULL,
    data_ultima_compra date NOT NULL,
    nf_compra character varying(20) NOT NULL
);


--
-- Name: fornecedores_id_cod_forn_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.fornecedores_id_cod_forn_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: fornecedores_id_cod_forn_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.fornecedores_id_cod_forn_seq OWNED BY public.fornecedores.id_cod_forn;


--
-- Name: produtos; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.produtos (
    id_cod_prod integer NOT NULL,
    cod_prod integer NOT NULL,
    cod_forn_prod integer NOT NULL,
    nome_prod character varying(40) NOT NULL,
    marca_prod character varying(40) NOT NULL,
    tam_prod character varying(10) NOT NULL,
    modelo_prod character varying(20) NOT NULL,
    genero_prod character varying(20),
    custo_prod double precision NOT NULL,
    id_cod_forn integer NOT NULL
);


--
-- Name: produtos_id_cod_prod_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.produtos_id_cod_prod_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: produtos_id_cod_prod_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.produtos_id_cod_prod_seq OWNED BY public.produtos.id_cod_prod;


--
-- Name: vendas; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.vendas (
    id_venda integer NOT NULL,
    nf_venda character varying(100) NOT NULL,
    data_venda date NOT NULL,
    valor_total_venda double precision NOT NULL,
    quant_prod_venda integer NOT NULL,
    valor_un_item_venda double precision NOT NULL,
    fk_cod_prod integer NOT NULL,
    fk_id_cod_cli integer NOT NULL
);


--
-- Name: vendas_id_venda_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.vendas_id_venda_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: vendas_id_venda_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.vendas_id_venda_seq OWNED BY public.vendas.id_venda;


--
-- Name: cliente id_cod_cli; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cliente ALTER COLUMN id_cod_cli SET DEFAULT nextval('public.cliente_id_cod_cli_seq'::regclass);


--
-- Name: estoque id_estoque; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estoque ALTER COLUMN id_estoque SET DEFAULT nextval('public.estoque_id_estoque_seq'::regclass);


--
-- Name: fornecedores id_cod_forn; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fornecedores ALTER COLUMN id_cod_forn SET DEFAULT nextval('public.fornecedores_id_cod_forn_seq'::regclass);


--
-- Name: produtos id_cod_prod; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.produtos ALTER COLUMN id_cod_prod SET DEFAULT nextval('public.produtos_id_cod_prod_seq'::regclass);


--
-- Name: vendas id_venda; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vendas ALTER COLUMN id_venda SET DEFAULT nextval('public.vendas_id_venda_seq'::regclass);


--
-- Name: cliente cliente_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id_cod_cli);


--
-- Name: estoque estoque_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estoque
    ADD CONSTRAINT estoque_pkey PRIMARY KEY (id_estoque);


--
-- Name: fornecedores fornecedores_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.fornecedores
    ADD CONSTRAINT fornecedores_pkey PRIMARY KEY (id_cod_forn);


--
-- Name: produtos produtos_cod_prod_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_cod_prod_key UNIQUE (cod_prod);


--
-- Name: produtos produtos_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produtos_pkey PRIMARY KEY (id_cod_prod);


--
-- Name: vendas vendas_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vendas
    ADD CONSTRAINT vendas_pkey PRIMARY KEY (id_venda);


--
-- Name: estoque fk_cod_prod_estoque; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.estoque
    ADD CONSTRAINT fk_cod_prod_estoque FOREIGN KEY (fk_cod_prod) REFERENCES public.produtos(cod_prod);


--
-- Name: vendas fk_cod_prod_vendas; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vendas
    ADD CONSTRAINT fk_cod_prod_vendas FOREIGN KEY (fk_cod_prod) REFERENCES public.produtos(cod_prod);


--
-- Name: vendas fk_id_cod_cli; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.vendas
    ADD CONSTRAINT fk_id_cod_cli FOREIGN KEY (fk_id_cod_cli) REFERENCES public.cliente(id_cod_cli);


--
-- Name: produtos fk_id_cod_forn; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT fk_id_cod_forn FOREIGN KEY (id_cod_forn) REFERENCES public.fornecedores(id_cod_forn);


--
-- PostgreSQL database dump complete
--

