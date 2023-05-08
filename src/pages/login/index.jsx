import React from "react";
import { Modal } from "antd";
import { useState } from "react";

export default function Login() {
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <div className="login w-[100vw] h-[100vh] overflow-hidden">
        <div className="flex flex-col justify-center items-center w-full h-full space-y-10">
          <div className="mb-10">
            <img src="/image/logo-login.png" alt="" />
          </div>
          <form className="md:w-96 w-full space-y-6">
            <div className="input-form-login">
              <label htmlFor="phone">아이디 (휴대폰 번호)</label>
              <input id="phone" type="text" placeholder="휴대폰번호 입력" />
            </div>
            <div className="input-form-login">
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                type="password"
                placeholder="비밀번호 입력"
              />
            </div>

            <button className="button-submit">로그인</button>
            <label htmlFor="myCheckbox01" className="checkbox">
              <input
                className="checkbox__input"
                type="checkbox"
                id="myCheckbox01"
              />
              <svg
                className="checkbox__icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
              >
                <rect
                  width="21"
                  height="21"
                  x=".5"
                  y=".5"
                  fill="#232328"
                  stroke="#FFF"
                  rx="3"
                />
                <path
                  className="tick"
                  stroke="#FFF"
                  fill="none"
                  strokeLinecap="round"
                  strokeWidth="4"
                  d="M4 10l5 5 9-9"
                />
              </svg>
              <span className="checkbox__label text-white">아이디 저장</span>
            </label>
          </form>
          <div className="text-gray-500 space-y-10 pt-10">
            <div className="flex items-center justify-center space-x-2 ">
              <span
                className="cursor-pointer"
                onClick={() => setModal1Open(true)}
              >
                업체등록
              </span>
              <span>|</span>
              <span
                className="cursor-pointer"
                onClick={() => setModal2Open(true)}
              >
                아이디/비밀번호 찾기
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <img src="/image/gsill.png" alt="GSILL" />
              <div className="items-end flex space-x-4">
                <img src="/image/coex.png" alt="GSILL" />
                <p className="text-xs">
                  Copyright © 2023 by COEX & GSIL Co., Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        centered
        open={modal1Open}
        onOk={() => setModal1Open(false)}
        onCancel={() => setModal1Open(false)}
      >
        <div className="bg-[#232328] flex items-center text-white justify-between p-6">
          <span>아이디/비밀번호 찾기</span>
          <img src="/image/logo.png" alt="" />
        </div>
        <div className="w-[70vw] h-[80vh] flex flex-col items-center justify-center">
          <div className=" text-center space-y-4">
            <h2 className="text-2xl font-bold">
              가입시 등록하신 이메일로 아이디/비밀번호가 발송됩니다.{" "}
            </h2>
            <div className="space-y-1">
              <p className="text-xl ">
                비밀번호는 보안을 위해 임시 비밀번호로 제공되며
              </p>
              <p className="text-xl">
                로그인 하신 후 본인의 비밀번호로 변경해 주시기 바랍니다.
              </p>
            </div>
          </div>
          <form className="w-2/4 space-y-4 pt-20">
            <div className="input-form">
              <label>사업자등록번호</label>
              <input />
            </div>
            <div className="input-form">
              <label>이메일 주소</label>
              <input type="text" />
              <span className="text-2xl mx-2">@</span>
              <select>
                <option></option>
              </select>
            </div>
            <div className="flex items-center space-x-6 w-[70%] ml-auto pt-20">
              <button className="bg-gray-600 rounded-md py-3 px-11 cursor-pointer text-white">
                취소
              </button>
              <button
                className="rounded-md py-3 px-11 cursor-pointer text-white"
                style="background: linear-gradient(180deg, #E03F8C 0%, #FF5570 100%);"
              >
                확인
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
      >
        <>
          <div className="bg-[#232328] flex items-center text-white justify-between p-6">
            <span>업체 기본정보 등록</span>
            <img src="../../../assets/image/logo.png" alt="" />
          </div>
          <div className="w-[70vw] h-[80vh] p-6 overflow-auto">
            <form className="w-full space-y-6 ">
              <div className="space-y-4">
                <p className="text-xl font-bold">회사정보</p>
                <hr />
                <div className="input-form">
                  <label className="required">사업자등록번호</label>
                  <select>
                    <option>1</option>
                    <option>1</option>
                    <option>1</option>
                  </select>
                </div>
                <div className="flex items-center justify-between space-x-7">
                  <div className="input-form w-1/2 required">
                    <label className="">업체명</label>
                    <input type="text" name="" id="" required />
                  </div>
                  <div className="input-form w-1/2 required">
                    <label className="">대표자</label>
                    <input type="text" name="" id="" required />
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-7">
                  <div className="input-form w-1/2 required">
                    <label className="">사업자등록번호</label>
                    <input type="text" name="" id="" required />
                  </div>
                  <div className="input-form w-1/2">
                    <label className="">법인번호</label>
                    <input type="text" name="" id="" />
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-7">
                  <div className="input-form w-1/2  ">
                    <label className="">담당자 이메일</label>
                    <input type="text" name="" id="" />
                    <span className="text-2xl mx-2">@</span>
                    <select className="w-full p-4 border border-gray-500 rounded-md">
                      <option></option>
                    </select>
                  </div>
                  <div className="input-form w-1/2">
                    <label className="">법인번호</label>
                    <input type="text" name="" id="" required />
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-7">
                  <div className="input-form w-1/2  ">
                    <label className="">주소</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="!w-1/3"
                      placeholder="06802"
                    />
                    <span className="material-icons mx-2 text-2xl py-3 px-4 rounded-md bg-gray-200">
                      search
                    </span>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="서울 서초구 청계산로 193"
                    />
                  </div>
                  <div className="input-form w-1/2 required">
                    <label className="">사용여부</label>
                    <input
                      type="text"
                      name=""
                      value="Y"
                      disabled
                      id=""
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between space-x-7">
                  <div className="input-form w-1/2  ">
                    <label className=""></label>
                    <input
                      type="text"
                      name=""
                      id=""
                      className=""
                      placeholder="상세주소를 입력해주세요."
                    />
                  </div>
                  <div className="input-form w-1/2 required">
                    <label className="">승인여부</label>
                    <input
                      type="text"
                      name=""
                      value="Y"
                      disabled
                      id=""
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <p className="text-xl font-bold">업종분류</p>
                <hr />
                <div className="grid grid-cols-4 gap-3">
                  <div className="border  rounded-md py-5 cursor-pointer {{industryActive == i ? 'border-pink-500 text-pink-500' : 'border-gray-200 '}}">
                    <p className="text-center">sss</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-xl font-bold">참여 행사</p>
                <hr />
                <div className="flex items-center justify-between space-x-7">
                  <div className="input-form w-1/2 required ">
                    <label className="">행사명</label>
                    <select className="w-full p-4 border border-gray-500 rounded-md">
                      <option></option>
                    </select>
                  </div>
                  <div className="input-form w-1/2 required">
                    <label className="">주최사</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      value="자동입력"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold">
                    안전관리자/현장대리인 등록
                  </p>
                  <span className="py-1 px-4 text-sm rounded bg-black text-white">
                    추가
                  </span>
                </div>
                <hr />
                <div className="">
                  <table className="w-full ">
                    <thead>
                      <tr>
                        <th>성명</th>
                        <th>직책</th>
                        <th>휴대폰 번호</th>
                        <th>첨부파일</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr *ngFor="let item of secureManagement">
                                    <td>
                                      <input type="text" value="김안전">
                                    </td>
                                    <td>
                                        <input type="text" value="직책">
                                    </td>
                                    <td><input type="text" value="010-0000-0000"></td>
                                    <td>
                                        <img src="../../../assets/image/link.png" className="p-1 bg-black mx-auto" alt="">
                                    </td>
                                </tr> */}
                    </tbody>
                  </table>
                </div>
                <div className="text-base">
                  <p>
                    * 안전관리자 자격 조건: 산업안전 지도사 또는
                    산업안전산업기사 이상 또는 건설안전산업기사 이상
                  </p>
                  <p>
                    * 현장대리인 자격 조건: 1입사 후 6개월 이상 경과한 임직원
                    2건축분야, 전기, 기계설비 분야
                  </p>
                  <p>
                    * 첨부 서류: 반명함 사진 1매, 재직증명서 1부, 4대 사회 보험
                    또는 국민연금 가입(작업신고 신청 해당월 기준) 증명서 1부,
                    경력증명서 1부, 자격증 사본
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-4">
                <p className="text-xl font-bold">작성 정보</p>
                <hr />
                <div className="flex items-center justify-between space-x-7">
                  <div className="input-form w-1/2  ">
                    <label className="">행사명</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      value="대한민국 소프트웨어대전"
                    />
                  </div>
                  <div className="input-form w-1/2 ">
                    <label className="">주최사</label>
                    <input
                      type="text"
                      name=""
                      id=""
                      disabled
                      value="자동입력"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-full justify-center pt-10">
                <button className="bg-gray-600 rounded-md py-3 w-28 text-center cursor-pointer text-white">
                  취소
                </button>
                <button
                  className="rounded-md py-3 w-28 text-center cursor-pointer text-white"
                  style="background: linear-gradient(180deg, #E03F8C 0%, #FF5570 100%);"
                >
                  업체 등록
                </button>
              </div>
            </form>
          </div>
        </>
      </Modal>
    </>
  );
}
