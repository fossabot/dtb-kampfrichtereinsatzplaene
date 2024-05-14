import { useEffect, useState } from "react";
import { open } from '@tauri-apps/api/shell';
import "./Licenses.css";
import { FluentProvider, webLightTheme, webDarkTheme, Accordion, AccordionItem, AccordionHeader, Button, Divider, AccordionPanel, Card, Title3 } from "@fluentui/react-components";
import { CalendarDateRegular, CodeFilled, FluentRegular, FolderListRegular, FolderSearchRegular, IconsRegular, NumberSymbolRegular, SettingsCogMultipleRegular, StoreMicrosoftRegular, TextAlignJustifyRegular, TextWholeWordRegular, WindowMultipleFilled, DocumentPdfRegular, CommentErrorRegular, WindowConsoleRegular, ArchiveRegular, PlugConnectedCheckmarkRegular, GlobeRegular, PipelineRegular, NumberRowRegular, PersonFeedbackRegular, MailEditRegular, PersonRunningRegular, ReadingListFilled, MarkdownFilled } from "@fluentui/react-icons";
import { FaGithub, FaFontAwesomeAlt } from "react-icons/fa";

export default function Licenses() {

    enum Repositories {
        Tauri = "https://github.com/tauri-apps/tauri",
        Serde = "https://github.com/serde-rs/serde",
        Chrono = "https://github.com/chronotope/chrono",
        libc = "https://github.com/rust-lang/libc",
        directories = "https://github.com/dirs-dev/directories-rs",
        Windows = "https://github.com/microsoft/windows-rs",
        Glob = "https://github.com/rust-lang/glob",
        Dotnet = "https://github.com/microsoft/dotnet",
        OpenXMLSDK = "https://github.com/dotnet/Open-XML-SDK",
        React = "https://github.com/facebook/react",
        FluentUI = "https://github.com/microsoft/fluentui",
        FluentUIIcons = "https://github.com/microsoft/fluentui-system-icons",
        ReactIcons = "https://github.com/react-icons/react-icons",
        UUID = "https://github.com/uuidjs/uuid",
        HeadlessChrome = "https://github.com/rust-headless-chrome/rust-headless-chrome",
        Anyhow = "https://github.com/dtolnay/anyhow",
        Logrs = "https://github.com/rust-lang/log",
        Walkdir = "https://github.com/BurntSushi/walkdir",
        Zip = "https://github.com/zip-rs/zip2",
        Ureq = "https://github.com/algesten/ureq",
        Dbus = "https://github.com/diwic/dbus-rs",
        Chromium = "https://chromium.googlesource.com/chromium/src.git",
        Clippit = "https://github.com/sergey-tihon/Clippit",
        Vergen = "https://github.com/rustyhorde/vergen",
        MailSend = "https://github.com/stalwartlabs/mail-send",
        MailBuilder = "https://github.com/stalwartlabs/mail-builder",
        Tokio = "https://github.com/tokio-rs/tokio",
        Marked = "https://github.com/markedjs/marked",
    }

    // Theme thing :)
    useEffect(() => {
        const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");
        darkModePreference.matches ? setIsLight(false) : setIsLight(true);
        darkModePreference.addEventListener("change", e => e.matches ? setIsLight(false) : setIsLight(true));
    }, []);
    const [isLight, setIsLight] = useState(true);

    async function redirect(product: Repositories) {
        await open(product);
    }

    return (
        <FluentProvider theme={isLight ? webLightTheme : webDarkTheme}>
            <div id="mainContainer">
                <Title3 className={"title"}>Open Source Lizenzen:</Title3>
                <Divider inset={true} className={"seperator"}/>
                <Accordion collapsible={true} multiple={true}>
                    <AccordionItem value={"Tauri"}>
                        <AccordionHeader icon={<WindowMultipleFilled/>}>
                            <div className={"description"}><p><b>Tauri (Framework)</b></p><p>v1.6.2</p><p><i>(MIT)</i>
                            </p>
                                <div className={"filler"}/>
                                <Button appearance={"transparent"} icon={<FaGithub/>}
                                        onClick={() => redirect(Repositories.Tauri)}/>
                            </div>
                        </AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2017 - Present Tauri Contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"Serde"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<TextAlignJustifyRegular/>}>
                            <div className={"description"}><p><b>Serde (Framework)</b></p><p>v1.0.199</p><p><i>(MIT)</i>
                            </p>
                            </div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Serde)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) Serde Contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"Chrono"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<CalendarDateRegular/>}>
                            <div className={"description"}><p><b>Chrono</b></p><p>v0.4.38</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Chrono)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2014, Kang Seonghoon.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"libc"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<SettingsCogMultipleRegular/>}>
                            <div className={"description"}><p><b>libc</b></p><p>v0.2.153</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.libc)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2014-2020 The Rust Project Developers.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"directories"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<FolderListRegular/>}>
                            <div className={"description"}><p><b>directories</b></p><p>v5.0.1</p><p><i>(MIT)</i></p>
                            </div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.directories)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2018 directories-rs contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"windows"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<StoreMicrosoftRegular/>}>
                            <div className={"description"}><p><b>windows (Syscall Bindings)</b></p><p>v0.56.0</p><p>
                                <i>(MIT)</i>
                            </p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Windows)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) Microsoft Corporation.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"glob"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<FolderSearchRegular/>}>
                            <div className={"description"}><p><b>glob</b></p><p>v0.3.1</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Glob)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2014 The Rust Project Developers.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"dotnet"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<CodeFilled/>}>
                            <div className={"description"}><p><b>Microsoft .NET SDK</b></p><p>v8.0 (oder höher)</p><p>
                                <i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Dotnet)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2019 Microsoft.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"openxml-sdk"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<TextWholeWordRegular/>}>
                            <div className={"description"}><p><b>.NET Open XML SDK</b></p><p>v3.0.2</p><p><i>(MIT)</i>
                            </p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.OpenXMLSDK)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) .NET Foundation and Contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"react"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<WindowMultipleFilled/>}>
                            <div className={"description"}><p><b>React</b></p><p>v18.3.1</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.React)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) Meta Platforms, Inc. and affiliates.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"fluentui"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<FluentRegular/>}>
                            <div className={"description"}><p><b>FluentUI (React Components)</b></p><p>v9.47.5</p><p>
                                <i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.FluentUI)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>Fluent UI React</b>
                                    <br/><br/>
                                    Copyright (c) Microsoft Corporation
                                    <br/><br/>
                                    All rights reserved.
                                    <br/><br/>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy of this
                                    software and associated documentation files (the ""Software""), to deal in the
                                    Software
                                    without restriction, including without limitation the rights to use, copy, modify,
                                    merge,
                                    publish, distribute, sublicense, and/or sell copies of the Software, and to permit
                                    persons
                                    to whom the Software is furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or
                                    substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
                                    INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                                    PARTICULAR
                                    PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
                                    LIABLE
                                    FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                                    OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
                                    OTHER
                                    DEALINGS IN THE SOFTWARE.
                                    <br/><br/>
                                    Note: Usage of the fonts and icons referenced in Fluent UI React is subject to the
                                    terms
                                    listed at <a
                                    href={"https://aka.ms/fluentui-assets-license"}>https://aka.ms/fluentui-assets-license</a>
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"fluentui-icons"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<IconsRegular/>}>
                            <div className={"description"}><p><b>FluentUI Icons (React Components)</b></p>
                                <p>v2.0.237</p><p>
                                    <i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.FluentUIIcons)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2020 Microsoft Corporation.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"react-icons"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<FaFontAwesomeAlt />}>
                            <div className={"description"}><p><b>react-icons (FontAwesome 5)</b></p><p>v5.1.0</p><p><i>MIT + CC-BY 4.0</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.ReactIcons)}/></AccordionHeader>
                        <AccordionPanel className={"doubleLicense"}>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2018 kamijin_fanta {"<kamijin@live.jp>"}
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>Attribution 4.0 International</b>
                                    <br/><br/>
                                    =======================================================================
                                    <br/><br/>
                                    Creative Commons Corporation ("Creative Commons") is not a law firm and
                                    does not provide legal services or legal advice. Distribution of
                                    Creative Commons public licenses does not create a lawyer-client or
                                    other relationship. Creative Commons makes its licenses and related
                                    information available on an "as-is" basis. Creative Commons gives no
                                    warranties regarding its licenses, any material licensed under their
                                    terms and conditions, or any related information. Creative Commons
                                    disclaims all liability for damages resulting from their use to the
                                    fullest extent possible.
                                    <br/><br/>
                                    Using Creative Commons Public Licenses
                                    <br/><br/>
                                    Creative Commons public licenses provide a standard set of terms and
                                    conditions that creators and other rights holders may use to share
                                    original works of authorship and other material subject to copyright
                                    and certain other rights specified in the public license below. The
                                    following considerations are for informational purposes only, are not
                                    exhaustive, and do not form part of our licenses.
                                    <br/><br/>
                                    Considerations for licensors: Our public licenses are
                                    intended for use by those authorized to give the public
                                    permission to use material in ways otherwise restricted by
                                    copyright and certain other rights. Our licenses are
                                    irrevocable. Licensors should read and understand the terms
                                    and conditions of the license they choose before applying it.
                                    Licensors should also secure all rights necessary before
                                    applying our licenses so that the public can reuse the
                                    material as expected. Licensors should clearly mark any
                                    material not subject to the license. This includes other CC-
                                    licensed material, or material used under an exception or
                                    limitation to copyright. More considerations for licensors:
                                    wiki.creativecommons.org/Considerations_for_licensors
                                    <br/><br/>
                                    Considerations for the public: By using one of our public
                                    licenses, a licensor grants the public permission to use the
                                    licensed material under specified terms and conditions. If
                                    the licensor's permission is not necessary for any reason--for
                                    example, because of any applicable exception or limitation to
                                    copyright--then that use is not regulated by the license. Our
                                    licenses grant only permissions under copyright and certain
                                    other rights that a licensor has authority to grant. Use of
                                    the licensed material may still be restricted for other
                                    reasons, including because others have copyright or other
                                    rights in the material. A licensor may make special requests,
                                    such as asking that all changes be marked or described.
                                    Although not required by our licenses, you are encouraged to
                                    respect those requests where reasonable. More considerations
                                    for the public:
                                    wiki.creativecommons.org/Considerations_for_licensees
                                    <br/><br/>
                                    =======================================================================
                                    <br/><br/>
                                    <b>Creative Commons Attribution 4.0 International Public License</b>
                                    <br/><br/>
                                    By exercising the Licensed Rights (defined below), You accept and agree
                                    to be bound by the terms and conditions of this Creative Commons
                                    Attribution 4.0 International Public License ("Public License"). To the
                                    extent this Public License may be interpreted as a contract, You are
                                    granted the Licensed Rights in consideration of Your acceptance of
                                    these terms and conditions, and the Licensor grants You such rights in
                                    consideration of benefits the Licensor receives from making the
                                    Licensed Material available under these terms and conditions.
                                    <br/><br/>
                                    Section 1 -- Definitions.
                                    <br/><br/>
                                    a. Adapted Material means material subject to Copyright and Similar
                                    Rights that is derived from or based upon the Licensed Material
                                    and in which the Licensed Material is translated, altered,
                                    arranged, transformed, or otherwise modified in a manner requiring
                                    permission under the Copyright and Similar Rights held by the
                                    Licensor. For purposes of this Public License, where the Licensed
                                    Material is a musical work, performance, or sound recording,
                                    Adapted Material is always produced where the Licensed Material is
                                    synched in timed relation with a moving image.
                                    <br/><br/>
                                    b. Adapter's License means the license You apply to Your Copyright
                                    and Similar Rights in Your contributions to Adapted Material in
                                    accordance with the terms and conditions of this Public License.
                                    <br/><br/>
                                    c. Copyright and Similar Rights means copyright and/or similar rights
                                    closely related to copyright including, without limitation,
                                    performance, broadcast, sound recording, and Sui Generis Database
                                    Rights, without regard to how the rights are labeled or
                                    categorized. For purposes of this Public License, the rights
                                    specified in Section 2(b)(1)-(2) are not Copyright and Similar
                                    Rights.
                                    <br/><br/>
                                    d. Effective Technological Measures means those measures that, in the
                                    absence of proper authority, may not be circumvented under laws
                                    fulfilling obligations under Article 11 of the WIPO Copyright
                                    Treaty adopted on December 20, 1996, and/or similar international
                                    agreements.
                                    <br/><br/>
                                    e. Exceptions and Limitations means fair use, fair dealing, and/or
                                    any other exception or limitation to Copyright and Similar Rights
                                    that applies to Your use of the Licensed Material.
                                    <br/><br/>
                                    f. Licensed Material means the artistic or literary work, database,
                                    or other material to which the Licensor applied this Public
                                    License.
                                    <br/><br/>
                                    g. Licensed Rights means the rights granted to You subject to the
                                    terms and conditions of this Public License, which are limited to
                                    all Copyright and Similar Rights that apply to Your use of the
                                    Licensed Material and that the Licensor has authority to license.
                                    <br/><br/>
                                    h. Licensor means the individual(s) or entity(ies) granting rights
                                    under this Public License.
                                    <br/><br/>
                                    i. Share means to provide material to the public by any means or
                                    process that requires permission under the Licensed Rights, such
                                    as reproduction, public display, public performance, distribution,
                                    dissemination, communication, or importation, and to make material
                                    available to the public including in ways that members of the
                                    public may access the material from a place and at a time
                                    individually chosen by them.
                                    <br/><br/>
                                    j. Sui Generis Database Rights means rights other than copyright
                                    resulting from Directive 96/9/EC of the European Parliament and of
                                    the Council of 11 March 1996 on the legal protection of databases,
                                    as amended and/or succeeded, as well as other essentially
                                    equivalent rights anywhere in the world.
                                    <br/><br/>
                                    k. You means the individual or entity exercising the Licensed Rights
                                    under this Public License. Your has a corresponding meaning.
                                    <br/><br/>
                                    Section 2 -- Scope.
                                    <br/><br/>
                                    a. License grant.
                                    <br/><br/>
                                    1. Subject to the terms and conditions of this Public License,
                                    the Licensor hereby grants You a worldwide, royalty-free,
                                    non-sublicensable, non-exclusive, irrevocable license to
                                    exercise the Licensed Rights in the Licensed Material to:
                                    <br/><br/>
                                    a. reproduce and Share the Licensed Material, in whole or
                                    in part; and
                                    <br/><br/>
                                    b. produce, reproduce, and Share Adapted Material.
                                    <br/><br/>
                                    2. Exceptions and Limitations. For the avoidance of doubt, where
                                    Exceptions and Limitations apply to Your use, this Public
                                    License does not apply, and You do not need to comply with
                                    its terms and conditions.
                                    <br/><br/>
                                    3. Term. The term of this Public License is specified in Section
                                    6(a).
                                    <br/><br/>
                                    4. Media and formats; technical modifications allowed. The
                                    Licensor authorizes You to exercise the Licensed Rights in
                                    all media and formats whether now known or hereafter created,
                                    and to make technical modifications necessary to do so. The
                                    Licensor waives and/or agrees not to assert any right or
                                    authority to forbid You from making technical modifications
                                    necessary to exercise the Licensed Rights, including
                                    technical modifications necessary to circumvent Effective
                                    Technological Measures. For purposes of this Public License,
                                    simply making modifications authorized by this Section 2(a)
                                    (4) never produces Adapted Material.
                                    <br/><br/>
                                    5. Downstream recipients.
                                    <br/><br/>
                                    a. Offer from the Licensor -- Licensed Material. Every
                                    recipient of the Licensed Material automatically
                                    receives an offer from the Licensor to exercise the
                                    Licensed Rights under the terms and conditions of this
                                    Public License.
                                    <br/><br/>
                                    b. No downstream restrictions. You may not offer or impose
                                    any additional or different terms or conditions on, or
                                    apply any Effective Technological Measures to, the
                                    Licensed Material if doing so restricts exercise of the
                                    Licensed Rights by any recipient of the Licensed
                                    Material.
                                    <br/><br/>
                                    6. No endorsement. Nothing in this Public License constitutes or
                                    may be construed as permission to assert or imply that You
                                    are, or that Your use of the Licensed Material is, connected
                                    with, or sponsored, endorsed, or granted official status by,
                                    the Licensor or others designated to receive attribution as
                                    provided in Section 3(a)(1)(A)(i).
                                    <br/><br/>
                                    b. Other rights.
                                    <br/><br/>
                                    1. Moral rights, such as the right of integrity, are not
                                    licensed under this Public License, nor are publicity,
                                    privacy, and/or other similar personality rights; however, to
                                    the extent possible, the Licensor waives and/or agrees not to
                                    assert any such rights held by the Licensor to the limited
                                    extent necessary to allow You to exercise the Licensed
                                    Rights, but not otherwise.
                                    <br/><br/>
                                    2. Patent and trademark rights are not licensed under this
                                    Public License.
                                    <br/><br/>
                                    3. To the extent possible, the Licensor waives any right to
                                    collect royalties from You for the exercise of the Licensed
                                    Rights, whether directly or through a collecting society
                                    under any voluntary or waivable statutory or compulsory
                                    licensing scheme. In all other cases the Licensor expressly
                                    reserves any right to collect such royalties.
                                    <br/><br/>
                                    Section 3 -- License Conditions.
                                    <br/><br/>
                                    Your exercise of the Licensed Rights is expressly made subject to the
                                    following conditions.
                                    <br/><br/>
                                    a. Attribution.
                                    <br/><br/>
                                    1. If You Share the Licensed Material (including in modified
                                    form), You must:
                                    <br/><br/>
                                    a. retain the following if it is supplied by the Licensor
                                    with the Licensed Material:
                                    <br/><br/>
                                    i. identification of the creator(s) of the Licensed
                                    Material and any others designated to receive
                                    attribution, in any reasonable manner requested by
                                    the Licensor (including by pseudonym if
                                    designated);
                                    <br/><br/>
                                    ii. a copyright notice;
                                    <br/><br/>
                                    iii. a notice that refers to this Public License;
                                    <br/><br/>
                                    iv. a notice that refers to the disclaimer of
                                    warranties;
                                    <br/><br/>
                                    v. a URI or hyperlink to the Licensed Material to the
                                    extent reasonably practicable;
                                    <br/><br/>
                                    b. indicate if You modified the Licensed Material and
                                    retain an indication of any previous modifications; and
                                    <br/><br/>
                                    c. indicate the Licensed Material is licensed under this
                                    Public License, and include the text of, or the URI or
                                    hyperlink to, this Public License.
                                    <br/><br/>
                                    2. You may satisfy the conditions in Section 3(a)(1) in any
                                    reasonable manner based on the medium, means, and context in
                                    which You Share the Licensed Material. For example, it may be
                                    reasonable to satisfy the conditions by providing a URI or
                                    hyperlink to a resource that includes the required
                                    information.
                                    <br/><br/>
                                    3. If requested by the Licensor, You must remove any of the
                                    information required by Section 3(a)(1)(A) to the extent
                                    reasonably practicable.
                                    <br/><br/>
                                    4. If You Share Adapted Material You produce, the Adapter's
                                    License You apply must not prevent recipients of the Adapted
                                    Material from complying with this Public License.
                                    <br/><br/>
                                    Section 4 -- Sui Generis Database Rights.
                                    <br/><br/>
                                    Where the Licensed Rights include Sui Generis Database Rights that
                                    apply to Your use of the Licensed Material:
                                    <br/><br/>
                                    a. for the avoidance of doubt, Section 2(a)(1) grants You the right
                                    to extract, reuse, reproduce, and Share all or a substantial
                                    portion of the contents of the database;
                                    <br/><br/>
                                    b. if You include all or a substantial portion of the database
                                    contents in a database in which You have Sui Generis Database
                                    Rights, then the database in which You have Sui Generis Database
                                    Rights (but not its individual contents) is Adapted Material; and
                                    <br/><br/>
                                    c. You must comply with the conditions in Section 3(a) if You Share
                                    all or a substantial portion of the contents of the database.
                                    <br/><br/>
                                    For the avoidance of doubt, this Section 4 supplements and does not
                                    replace Your obligations under this Public License where the Licensed
                                    Rights include other Copyright and Similar Rights.
                                    <br/><br/>
                                    Section 5 -- Disclaimer of Warranties and Limitation of Liability.
                                    <br/><br/>
                                    a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE
                                    EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS
                                    AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF
                                    ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,
                                    IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,
                                    WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
                                    PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,
                                    ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT
                                    KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT
                                    ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.
                                    <br/><br/>
                                    b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE
                                    TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,
                                    NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,
                                    INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,
                                    COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR
                                    USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN
                                    ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR
                                    DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR
                                    IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.
                                    <br/><br/>
                                    c. The disclaimer of warranties and limitation of liability provided
                                    above shall be interpreted in a manner that, to the extent
                                    possible, most closely approximates an absolute disclaimer and
                                    waiver of all liability.
                                    <br/><br/>
                                    Section 6 -- Term and Termination.
                                    <br/><br/>
                                    a. This Public License applies for the term of the Copyright and
                                    Similar Rights licensed here. However, if You fail to comply with
                                    this Public License, then Your rights under this Public License
                                    terminate automatically.
                                    <br/><br/>
                                    b. Where Your right to use the Licensed Material has terminated under
                                    Section 6(a), it reinstates:
                                    <br/><br/>
                                    1. automatically as of the date the violation is cured, provided
                                    it is cured within 30 days of Your discovery of the
                                    violation; or
                                    <br/><br/>
                                    2. upon express reinstatement by the Licensor.
                                    <br/><br/>
                                    For the avoidance of doubt, this Section 6(b) does not affect any
                                    right the Licensor may have to seek remedies for Your violations
                                    of this Public License.
                                    <br/><br/>
                                    c. For the avoidance of doubt, the Licensor may also offer the
                                    Licensed Material under separate terms or conditions or stop
                                    distributing the Licensed Material at any time; however, doing so
                                    will not terminate this Public License.
                                    <br/><br/>
                                    d. Sections 1, 5, 6, 7, and 8 survive termination of this Public
                                    License.
                                    <br/><br/>
                                    Section 7 -- Other Terms and Conditions.
                                    <br/><br/>
                                    a. The Licensor shall not be bound by any additional or different
                                    terms or conditions communicated by You unless expressly agreed.
                                    <br/><br/>
                                    b. Any arrangements, understandings, or agreements regarding the
                                    Licensed Material not stated herein are separate from and
                                    independent of the terms and conditions of this Public License.
                                    <br/><br/>
                                    Section 8 -- Interpretation.
                                    <br/><br/>
                                    a. For the avoidance of doubt, this Public License does not, and
                                    shall not be interpreted to, reduce, limit, restrict, or impose
                                    conditions on any use of the Licensed Material that could lawfully
                                    be made without permission under this Public License.
                                    <br/><br/>
                                    b. To the extent possible, if any provision of this Public License is
                                    deemed unenforceable, it shall be automatically reformed to the
                                    minimum extent necessary to make it enforceable. If the provision
                                    cannot be reformed, it shall be severed from this Public License
                                    without affecting the enforceability of the remaining terms and
                                    conditions.
                                    <br/><br/>
                                    c. No term or condition of this Public License will be waived and no
                                    failure to comply consented to unless expressly agreed to by the
                                    Licensor.
                                    <br/><br/>
                                    d. Nothing in this Public License constitutes or may be interpreted
                                    as a limitation upon, or waiver of, any privileges and immunities
                                    that apply to the Licensor or You, including from the legal
                                    processes of any jurisdiction or authority.
                                    <br/><br/>
                                    =======================================================================
                                    <br/><br/>
                                    Creative Commons is not a party to its public
                                    licenses. Notwithstanding, Creative Commons may elect to apply one of
                                    its public licenses to material it publishes and in those instances
                                    will be considered the “Licensor.” The text of the Creative Commons
                                    public licenses is dedicated to the public domain under the CC0 Public
                                    Domain Dedication. Except for the limited purpose of indicating that
                                    material is shared under a Creative Commons public license or as
                                    otherwise permitted by the Creative Commons policies published at
                                    creativecommons.org/policies, Creative Commons does not authorize the
                                    use of the trademark "Creative Commons" or any other trademark or logo
                                    of Creative Commons without its prior written consent including,
                                    without limitation, in connection with any unauthorized modifications
                                    to any of its public licenses or any other arrangements,
                                    understandings, or agreements concerning use of licensed material. For
                                    the avoidance of doubt, this paragraph does not form part of the
                                    public licenses.
                                    <br/><br/>
                                    Creative Commons may be contacted at <a href={"creativecommons.org."}>creativecommons.org.</a>
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"uuid"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<NumberSymbolRegular/>}>
                            <div className={"description"}><p><b>uuid</b></p><p>v9.0.1</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.UUID)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2010-2020 Robert Kieffer and other contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"headless-chrome"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<DocumentPdfRegular/>}>
                            <div className={"description"}><p><b>headless-chrome</b></p><p>v1.0.9</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.HeadlessChrome)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright © 2022 headless_chrome contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"anyhow"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<CommentErrorRegular/>}>
                            <div className={"description"}><p><b>Anyhow ¯\_(°ペ)_/¯</b></p><p>v1.0.82</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Anyhow)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright © anyhow contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"logrs"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<WindowConsoleRegular/>}>
                            <div className={"description"}><p><b>log</b></p><p>v0.4.21</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Logrs)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2014 The Rust Project Developers.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"walkdir"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<FolderListRegular/>}>
                            <div className={"description"}><p><b>walkdir</b></p><p>v2.5.0</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Walkdir)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2015 Andrew Gallant.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"zip"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<ArchiveRegular/>}>
                            <div className={"description"}><p><b>zip</b></p><p>v0.6.6</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Zip)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2014 Mathijs van de Nes.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"ureq"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<PlugConnectedCheckmarkRegular/>}>
                            <div className={"description"}><p><b>ureq</b></p><p>v2.9.7</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Ureq)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2019 Martin Algesten.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"dbus"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<PipelineRegular/>}>
                            <div className={"description"}><p><b>dbus</b></p><p>v0.9.7</p><p><i>(Apache-2.0)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Dbus)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>Apache License</b>
                                    <br/><br/><br/><br/>
                                    Version 2.0, January 2004<br/><br/>
                                    <a href={"http://www.apache.org/licenses/"}>http://www.apache.org/licenses/</a>
                                    <br/><br/><br/><br/>
                                    TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
                                    <br/><br/>
                                    1. Definitions.
                                    <br/><br/>
                                    "License" shall mean the terms and conditions for use, reproduction,
                                    and distribution as defined by Sections 1 through 9 of this document.
                                    <br/><br/>
                                    "Licensor" shall mean the copyright owner or entity authorized by
                                    the copyright owner that is granting the License.
                                    <br/><br/>
                                    "Legal Entity" shall mean the union of the acting entity and all
                                    other entities that control, are controlled by, or are under common
                                    control with that entity. For the purposes of this definition,
                                    "control" means (i) the power, direct or indirect, to cause the
                                    direction or management of such entity, whether by contract or
                                    otherwise, or (ii) ownership of fifty percent (50%) or more of the
                                    outstanding shares, or (iii) beneficial ownership of such entity.
                                    <br/><br/>
                                    "You" (or "Your") shall mean an individual or Legal Entity
                                    exercising permissions granted by this License.
                                    <br/><br/>
                                    "Source" form shall mean the preferred form for making modifications,
                                    including but not limited to software source code, documentation
                                    source, and configuration files.
                                    <br/><br/>
                                    "Object" form shall mean any form resulting from mechanical
                                    transformation or translation of a Source form, including but
                                    not limited to compiled object code, generated documentation,
                                    and conversions to other media types.
                                    <br/><br/>
                                    "Work" shall mean the work of authorship, whether in Source or
                                    Object form, made available under the License, as indicated by a
                                    copyright notice that is included in or attached to the work
                                    (an example is provided in the Appendix below).
                                    <br/><br/>
                                    "Derivative Works" shall mean any work, whether in Source or Object
                                    form, that is based on (or derived from) the Work and for which the
                                    editorial revisions, annotations, elaborations, or other modifications
                                    represent, as a whole, an original work of authorship. For the purposes
                                    of this License, Derivative Works shall not include works that remain
                                    separable from, or merely link (or bind by name) to the interfaces of,
                                    the Work and Derivative Works thereof.
                                    <br/><br/>
                                    "Contribution" shall mean any work of authorship, including
                                    the original version of the Work and any modifications or additions
                                    to that Work or Derivative Works thereof, that is intentionally
                                    submitted to Licensor for inclusion in the Work by the copyright owner
                                    or by an individual or Legal Entity authorized to submit on behalf of
                                    the copyright owner. For the purposes of this definition, "submitted"
                                    means any form of electronic, verbal, or written communication sent
                                    to the Licensor or its representatives, including but not limited to
                                    communication on electronic mailing lists, source code control systems,
                                    and issue tracking systems that are managed by, or on behalf of, the
                                    Licensor for the purpose of discussing and improving the Work, but
                                    excluding communication that is conspicuously marked or otherwise
                                    designated in writing by the copyright owner as "Not a Contribution."
                                    <br/><br/>
                                    "Contributor" shall mean Licensor and any individual or Legal Entity
                                    on behalf of whom a Contribution has been received by Licensor and
                                    subsequently incorporated within the Work.
                                    <br/><br/>
                                    2. Grant of Copyright License. Subject to the terms and conditions of
                                    this License, each Contributor hereby grants to You a perpetual,
                                    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
                                    copyright license to reproduce, prepare Derivative Works of,
                                    publicly display, publicly perform, sublicense, and distribute the
                                    Work and such Derivative Works in Source or Object form.
                                    <br/><br/>
                                    3. Grant of Patent License. Subject to the terms and conditions of
                                    this License, each Contributor hereby grants to You a perpetual,
                                    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
                                    (except as stated in this section) patent license to make, have made,
                                    use, offer to sell, sell, import, and otherwise transfer the Work,
                                    where such license applies only to those patent claims licensable
                                    by such Contributor that are necessarily infringed by their
                                    Contribution(s) alone or by combination of their Contribution(s)
                                    with the Work to which such Contribution(s) was submitted. If You
                                    institute patent litigation against any entity (including a
                                    cross-claim or counterclaim in a lawsuit) alleging that the Work
                                    or a Contribution incorporated within the Work constitutes direct
                                    or contributory patent infringement, then any patent licenses
                                    granted to You under this License for that Work shall terminate
                                    as of the date such litigation is filed.
                                    <br/><br/>
                                    4. Redistribution. You may reproduce and distribute copies of the
                                    Work or Derivative Works thereof in any medium, with or without
                                    modifications, and in Source or Object form, provided that You
                                    meet the following conditions:
                                    <br/><br/>
                                    (a) You must give any other recipients of the Work or
                                    Derivative Works a copy of this License; and
                                    <br/><br/>
                                    (b) You must cause any modified files to carry prominent notices
                                    stating that You changed the files; and
                                    <br/><br/>
                                    (c) You must retain, in the Source form of any Derivative Works
                                    that You distribute, all copyright, patent, trademark, and
                                    attribution notices from the Source form of the Work,
                                    excluding those notices that do not pertain to any part of
                                    the Derivative Works; and
                                    <br/><br/>
                                    (d) If the Work includes a "NOTICE" text file as part of its
                                    distribution, then any Derivative Works that You distribute must
                                    include a readable copy of the attribution notices contained
                                    within such NOTICE file, excluding those notices that do not
                                    pertain to any part of the Derivative Works, in at least one
                                    of the following places: within a NOTICE text file distributed
                                    as part of the Derivative Works; within the Source form or
                                    documentation, if provided along with the Derivative Works; or,
                                    within a display generated by the Derivative Works, if and
                                    wherever such third-party notices normally appear. The contents
                                    of the NOTICE file are for informational purposes only and
                                    do not modify the License. You may add Your own attribution
                                    notices within Derivative Works that You distribute, alongside
                                    or as an addendum to the NOTICE text from the Work, provided
                                    that such additional attribution notices cannot be construed
                                    as modifying the License.
                                    <br/><br/>
                                    You may add Your own copyright statement to Your modifications and
                                    may provide additional or different license terms and conditions
                                    for use, reproduction, or distribution of Your modifications, or
                                    for any such Derivative Works as a whole, provided Your use,
                                    reproduction, and distribution of the Work otherwise complies with
                                    the conditions stated in this License.
                                    <br/><br/>
                                    5. Submission of Contributions. Unless You explicitly state otherwise,
                                    any Contribution intentionally submitted for inclusion in the Work
                                    by You to the Licensor shall be under the terms and conditions of
                                    this License, without any additional terms or conditions.
                                    Notwithstanding the above, nothing herein shall supersede or modify
                                    the terms of any separate license agreement you may have executed
                                    with Licensor regarding such Contributions.
                                    <br/><br/>
                                    6. Trademarks. This License does not grant permission to use the trade
                                    names, trademarks, service marks, or product names of the Licensor,
                                    except as required for reasonable and customary use in describing the
                                    origin of the Work and reproducing the content of the NOTICE file.
                                    <br/><br/>
                                    7. Disclaimer of Warranty. Unless required by applicable law or
                                    agreed to in writing, Licensor provides the Work (and each
                                    Contributor provides its Contributions) on an "AS IS" BASIS,
                                    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
                                    implied, including, without limitation, any warranties or conditions
                                    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
                                    PARTICULAR PURPOSE. You are solely responsible for determining the
                                    appropriateness of using or redistributing the Work and assume any
                                    risks associated with Your exercise of permissions under this License.
                                    <br/><br/>
                                    8. Limitation of Liability. In no event and under no legal theory,
                                    whether in tort (including negligence), contract, or otherwise,
                                    unless required by applicable law (such as deliberate and grossly
                                    negligent acts) or agreed to in writing, shall any Contributor be
                                    liable to You for damages, including any direct, indirect, special,
                                    incidental, or consequential damages of any character arising as a
                                    result of this License or out of the use or inability to use the
                                    Work (including but not limited to damages for loss of goodwill,
                                    work stoppage, computer failure or malfunction, or any and all
                                    other commercial damages or losses), even if such Contributor
                                    has been advised of the possibility of such damages.
                                    <br/><br/>
                                    9. Accepting Warranty or Additional Liability. While redistributing
                                    the Work or Derivative Works thereof, You may choose to offer,
                                    and charge a fee for, acceptance of support, warranty, indemnity,
                                    or other liability obligations and/or rights consistent with this
                                    License. However, in accepting such obligations, You may act only
                                    on Your own behalf and on Your sole responsibility, not on behalf
                                    of any other Contributor, and only if You agree to indemnify,
                                    defend, and hold each Contributor harmless for any liability
                                    incurred by, or claims asserted against, such Contributor by reason
                                    of your accepting any such warranty or additional liability.
                                    <br/><br/>
                                    END OF TERMS AND CONDITIONS
                                    <br/><br/>
                                    APPENDIX: How to apply the Apache License to your work.
                                    <br/><br/>
                                    To apply the Apache License to your work, attach the following
                                    boilerplate notice, with the fields enclosed by brackets "{}"
                                    replaced with your own identifying information. (Don't include
                                    the brackets!) The text should be enclosed in the appropriate
                                    comment syntax for the file format. We also recommend that a
                                    file or class name and description of purpose be included on the
                                    same "printed page" as the copyright notice for easier
                                    identification within third-party archives.
                                    <br/><br/>
                                    Copyright 2014-2018 David Henningsson and other contributors
                                    <br/><br/>
                                    Licensed under the Apache License, Version 2.0 (the "License");
                                    you may not use this file except in compliance with the License.
                                    You may obtain a copy of the License at
                                    <br/><br/>
                                    <a href={"http://www.apache.org/licenses/LICENSE-2.0"}>http://www.apache.org/licenses/LICENSE-2.0</a>
                                    <br/><br/>
                                    Unless required by applicable law or agreed to in writing, software
                                    distributed under the License is distributed on an "AS IS" BASIS,
                                    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                    See the License for the specific language governing permissions and
                                    limitations under the License.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"chromium"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<GlobeRegular/>}>
                            <div className={"description"}><p><b>Chromium</b></p><p>v126.0.6452.0</p><p><i>(BSD-3-Clause)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Chromium)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>BSD-3-Clause License</b>
                                    <br/><br/><br/><br/>
                                    Copyright 2015 - 2024 The Chromium Authors.
                                    <br/><br/><br/><br/>
                                    Redistribution and use in source and binary forms, with or without
                                    modification, are permitted provided that the following conditions are
                                    met:
                                    <br/><br/><br/><br/>
                                    * Redistributions of source code must retain the above copyright
                                    notice, this list of conditions and the following disclaimer.
                                    <br/><br/>
                                    * Redistributions in binary form must reproduce the above
                                    copyright notice, this list of conditions and the following disclaimer
                                    in the documentation and/or other materials provided with the
                                    distribution.
                                    <br/><br/>
                                    * Neither the name of Google LLC nor the names of its
                                    contributors may be used to endorse or promote products derived from
                                    this software without specific prior written permission.
                                    <br/><br/><br/><br/>
                                    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
                                    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
                                    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
                                    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
                                    OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
                                    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
                                    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
                                    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
                                    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
                                    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
                                    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"clippit"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<DocumentPdfRegular/>}>
                            <div className={"description"}><p><b>Clippit (Modified)</b></p><p>v2.1.1 (commit 8e09e70)</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Clippit)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) Microsoft Corporation.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"vergen"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<NumberRowRegular/>}>
                            <div className={"description"}><p><b>vergen</b></p><p>v8.3.1</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Vergen)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2016 The Rust Project Developers.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"mail-send"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<PersonFeedbackRegular/>}>
                            <div className={"description"}><p><b>mail-send</b></p><p>v0.4.7</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.MailSend)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) mail-send Contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"mail-builder"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<MailEditRegular/>}>
                            <div className={"description"}><p><b>mail-builder</b></p><p>v0.3.1</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.MailBuilder)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) mail-builder Contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"tokio"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<PersonRunningRegular/>}>
                            <div className={"description"}><p><b>Tokio</b></p><p>v1.37.0</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Tokio)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2023 Tokio Contributors.
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"marked"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<ReadingListFilled/>}>
                            <div className={"description"}><p><b>marked</b></p><p>v12.0.2</p><p><i>(MIT)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Marked)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>MIT License</b>
                                    <br/><br/>
                                    Copyright (c) 2018+, MarkedJS (<a href={"https://github.com/markedjs/"}>https://github.com/markedjs/</a>) Copyright (c) 2011-2018, Christopher Jeffrey (<a href={"https://github.com/chjj/"}>https://github.com/chjj/</a>).
                                    <br/><br/>
                                    Permission is hereby granted, free of charge, to any person obtaining a copy
                                    of this software and associated documentation files (the "Software"), to deal
                                    in the Software without restriction, including without limitation the rights
                                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                    copies of the Software, and to permit persons to whom the Software is
                                    furnished to do so, subject to the following conditions:
                                    <br/><br/>
                                    The above copyright notice and this permission notice shall be included in all
                                    copies or substantial portions of the Software.
                                    <br/><br/>
                                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                                    SOFTWARE.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                    <AccordionItem value={"markdown"}>
                        <AccordionHeader button={<Button appearance={"outline"}/>} icon={<MarkdownFilled/>}>
                            <div className={"description"}><p><b>Markdown</b></p><p>v1.0.1</p><p><i>(BSD-3-Clause)</i></p></div>
                            <div className={"filler"}/>
                            <Button appearance={"transparent"} icon={<FaGithub/>}
                                    onClick={() => redirect(Repositories.Marked)}/></AccordionHeader>
                        <AccordionPanel>
                            <Card className={"panel"}>
                                <div className={"licenseText"}>
                                    <b>BSD-3-Clause License</b>
                                    <br/><br/>
                                    Copyright © 2004, John Gruber.
                                    <br/><br/>
                                    <a href={"http://daringfireball.net/"}>http://daringfireball.net/</a>
                                    <br/><br/>
                                    All rights reserved.
                                    <br/><br/>
                                    Redistribution and use in source and binary forms, with or without modification, are
                                    permitted provided that the following conditions are met:
                                    <br/><br/>
                                    - Redistributions of source code must retain the above copyright notice, this list
                                    of conditions and the following disclaimer.
                                    <br/><br/>
                                    - Redistributions in binary form must reproduce the above copyright notice, this
                                    list of conditions and the following disclaimer in the documentation and/or other
                                    materials provided with the distribution.
                                    <br/><br/>
                                    - Neither the name “Markdown” nor the names of its contributors may be used to
                                    endorse or promote products derived from this software without specific prior
                                    written permission.
                                    <br/><br/>
                                    This software is provided by the copyright holders and contributors “as is” and any
                                    express or implied warranties, including, but not limited to, the implied warranties
                                    of merchantability and fitness for a particular purpose are disclaimed. In no event
                                    shall the copyright owner or contributors be liable for any direct, indirect,
                                    incidental, special, exemplary, or consequential damages (including, but not limited
                                    to, procurement of substitute goods or services; loss of use, data, or profits; or
                                    business interruption) however caused and on any theory of liability, whether in
                                    contract, strict liability, or tort (including negligence or otherwise) arising in
                                    any way out of the use of this software, even if advised of the possibility of such
                                    damage.
                                </div>
                            </Card>
                        </AccordionPanel>
                        <Divider inset={true}/>
                    </AccordionItem>
                </Accordion>
            </div>
        </FluentProvider>
    );
}